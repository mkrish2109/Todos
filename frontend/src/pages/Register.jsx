import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link, useAsyncValue } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

function Register() {
  const { register } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target["password"].value !== e.target["conformPassword"].value) {
      alert("Password and conform password are not same");
      return;
    }
    const data = {};
    data.username = e.target["username"].value;
    data.email = e.target["email"].value;
    data.password = e.target["password"].value;
    register(data);
  }

  return (
    <div className="items-center justify-center flex h-[calc(100vh-88px-90px)] ">
      <form
        className="flex max-w-md flex-col gap-4  [box-shadow:0px_12px_99px_15px_rgba(0,0,0,0.1)] p-7 rounded-lg"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
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
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="john12@gmail.com"
              required
              shadow
            />
          </div>
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
          />
        </div>

        <Button type="submit">Register new account</Button>
        <p className="text-center">OR</p>
        <Link className="text-center underline hover:underline-offset-4 hover:text-zinc-500" to="/login">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
