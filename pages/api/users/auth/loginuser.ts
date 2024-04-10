import { ServerAuthenticate } from "@/lib/serverAuth";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await ServerAuthenticate({ req, res });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).end((error as Error).message);
  }
}
