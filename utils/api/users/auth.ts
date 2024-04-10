import { User } from "@/types";
import axios from "axios";
import { signIn } from "next-auth/react";

export const register = async ({ username, name, email, password }: User) => {
  try {
    const response: any = await axios.post("/api/users/auth/register", {
      username,
      name,
      email,
      password,
    });

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  } catch (error) {
    console.log(error);
  }
};
