import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

const useLoginUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/users/auth/loginuser",
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useLoginUser;
