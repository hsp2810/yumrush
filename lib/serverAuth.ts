import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import type { GetServerSidePropsContext } from "next";

export const ServerAuthenticate = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  const { req, res } = ctx;
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    throw new Error("User not found. Login first");
  }

  if (!session?.user?.email) {
    throw new Error("User not found. Login first");
  }

  const email: string = session?.user?.email;
  console.log(email);
  const user = await prismadb.user.findUnique({
    where: {
      email: email,
    },
    select: {
      role: false,
      password: false,
      id: true,
      email: true,
      name: true,
    },
  });

  return user;
};
