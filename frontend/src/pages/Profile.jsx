import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BASE_URL, updateUser } from "../services/apiService";
import { toast } from "react-toastify";
import { useAuth } from "../provider/AuthProvider";

function Profile() {
  // const { register } = useAuth();
  const { user, removeUser } = useAuth();
  const [formState, setFormState] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      // If it's image.
      setFormState({
        ...formState,
        image: e.target.files[0],
      });
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
    <div className="items-center justify-center p-8">
      <h3 className="font-bold text-xl pb-5 ">Profile</h3>

      <div className="items-center justify-center">
        <form
          className="flex max-w-md flex-col gap-4  [box-shadow:0px_12px_99px_15px_rgba(0,0,0,0.1)] p-7 rounded-lg"
          onSubmit={handleSubmit}>
          <p>{user.email}</p>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>

            <FileInput
              type="file"
              className=" rounded-full border-[1px] border-[#424242] w-full"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
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
              <Label htmlFor="password" value="Password" />
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
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="password"
              name="conformPassword"
              shadow
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="bg-[#BCFD4C] text-black enabled:hover:bg-[#9aec0c]">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
