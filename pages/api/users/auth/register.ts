import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { username, name, email, password } = req.body;
    if (!username || !name || !email || !password) {
      return res
        .status(401)
        .json({ message: "Please enter all the credentials" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prismadb.user.create({
      data: {
        username,
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log(user);

    return res
      .status(200)
      .json({ message: "User Registered Successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
