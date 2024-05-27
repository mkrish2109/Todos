import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

function Login() {
  return (
    <div className="items-center flex justify-center h-[calc(100vh-88px-90px)]  ">
      <form className="p-8 rounded-lg min-w-[300px] max-w-md flex  flex-col gap-4 ">
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
