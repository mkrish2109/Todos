import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { updateUser } from "../services/apiService";
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
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(formState);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (e.target["password"].value !== e.target["conformPassword"].value) {
      toast("Password and conform-password don't match!");

      return;
    }
    const result = await updateUser(user.userId, {
      username: formState.username,
      password: formState.password,
    });
    alert("success");
    console.log(formState);

    // register(data);

    removeUser();
  }

  return (
    <div className="items-center justify-center p-8">
      <h3 className="font-bold text-xl pb-5 ">Profile</h3>
      <div className="items-center justify-center">
        <form
          className="flex max-w-md flex-col gap-4  [box-shadow:0px_12px_99px_15px_rgba(0,0,0,0.1)] p-7 rounded-lg"
          onSubmit={handleSubmit}>
          <div>
            <p>{user.email}</p>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="John Doe"
              required
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
              required
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
              required
              shadow
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="bg-[#BCFD4C] text-black enabled  :hover:bg-[#9aec0c]">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
