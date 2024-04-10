import Hero from "@/components/Dashboard/Hero";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: "/startorder",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
