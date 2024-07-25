import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BASE_URL, updateUser } from "../services/apiService";
import { toast } from "react-toastify";
import { useAuth } from "../provider/AuthProvider";
import UserDetails from "../components/profile/UserDetails";
import FlowModel from "../components/comman/FlowModel";
import ModelNav from "../components/comman/ModelNav";

function Profile() {
  // const { register } = useAuth();
  const { user, removeUser } = useAuth();
  const [formState, setFormState] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function handleEdit() {
    toggleModal();
  }
  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      // If it's image.
      setFormState({
        ...formState,
        image: e.target.files[0],
      });
      setIsOpen(false);
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isPasswordSame = formState.password === formState.confirmPassword;
    if (!isPasswordSame) {
      toast("Passwords don't match!");
      return;
    }

    const formData = new FormData();

    formData.append("image", formState.image);
    formData.append("username", formState.username);
    formData.append("password", formState.password);

    fetch(`${BASE_URL}/users/${user.userId}`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        // "Content-type": "multipart/form-data", // Do not write this. Let the browser decide it.
      },
    });

    removeUser();
  }

  return (
    <>
      <h3 className="font-bold text-2xl pt-5 ">Profile</h3>
      <div className="grid grid-cols-2 items-center">
        <div className="justify-center  items-center flex [box-shadow:0px_12px_99px_15px_rgba(0,0,0,0.1)] p-8  gap-5">
          <div className="items-center justify-center">
            <button onClick={handleEdit}>
              <div className="h-[200px] w-[200px] rounded-full 	">
                <img
                  className=" rounded-full object-cover h-full w-full hover:cursor-pointer	"
                  src={user.image}
                  alt=""
                />
              </div>
            </button>
            <p className="text-center pt-3 text-lg font-semibold">
              {user.username}
            </p>
          </div>

          <div className="">
            <h2 className="text-2xl font-bold  border-b-2 border-[#BCFD4C] pb-2">
              Information
            </h2>
            <p className="text-lg pt-6 font-semibold ">Email:</p>
            <p className="text-lg text-white    ">{user.email}</p>
          </div>
        </div>
        <form className=" " onSubmit={handleSubmit}>
          <div className="items-center justify-center p-8 grow-[1] cols-1 text-white">
            <div className="flex max-w-md flex-col gap-4  [box-shadow:0px_12px_99px_15px_rgba(0,0,0,0.1)] p-7 rounded-lg ">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="username"
                    className="text-white"
                    value="Username"
                  />
                </div>
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  placeholder="John Doe"
                  shadow
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password"
                    className="text-white"
                    value="Password"
                  />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  shadow
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="repeat-password"
                    className="text-white"
                    value="Confirm  password"
                  />
                </div>
                <TextInput
                  id="repeat-password"
                  type="password"
                  name="confirmPassword"
                  shadow
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="bg-[#BCFD4C] text-black enabled:hover:bg-[#9aec0c]">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div>
        
        {isOpen && (
          <FlowModel
            title={<ModelNav title="Upload Image" />}
            isOpen={isOpen}
            toggleModal={toggleModal}
            body={
              <FileInput
                type="file"
                className="  w-full"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            }
          />
        )}
      </div>
    </>
  );
}

export default Profile;
