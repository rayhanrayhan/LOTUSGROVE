import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useLoggedUsers = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    data: loggedUsers = [],
    isLoading: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["loggedUsers"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://lotusgrove-server-site.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });
  return [loggedUsers, isLoading, refetch];
};

export default useLoggedUsers;
