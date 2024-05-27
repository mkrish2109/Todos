import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="items-center justify-center flex h-[calc(100vh-88px-90px)]">
      <form className="flex max-w-md flex-col gap-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
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
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
}

export default Register;
