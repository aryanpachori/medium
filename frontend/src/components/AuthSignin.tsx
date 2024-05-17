import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
export const AuthSignin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    email: "",
    password: "",
  });

  async function sendRequest() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/user/signin`,
      postInputs
    );
   
    const token = response.data.token; 
    localStorage.setItem("token",token );
    navigate("/blogs");
  }

  return (
    <div className=" bg-gray-100 flex h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-950">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-500 dark:text-gray-400">
              New here? Create an account
              <Link
                to={"/Signup"}
                className="underline underline-offset-1 pl-1 font-bold"
              >
                Signup
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    email: e.target.value,
                  }));
                }}
                className="rounded-2xl border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500 dark:placeholder-gray-500"
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    password: e.target.value,
                  }));
                }}
                className="rounded-2xl border-gray-300 focus:border-gray-500 dark:border-gray-700 dark:focus:border-gray-500 dark:placeholder-gray-500"
                id="password"
                required
                type="password"
              />
            </div>
            <Button
              onClick={sendRequest}
              className="w-full rounded-2xl bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              type="submit"
            >
              SignIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
