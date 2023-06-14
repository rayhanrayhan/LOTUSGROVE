import React from "react";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UsersCard from "../../Components/UsersCard";

const ManageUsers = () => {
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://lotusgrove-server-site.vercel.app/users"
      );
      return res.data;
    },
  });

  const handleRole = (id, role) => {
    axios
      .patch(`https://lotusgrove-server-site.vercel.app/users/${id}`, { role })
      .then((data) => {
        console.log(data.data.modifiedCount);
        alert(`Make ${role} done`);
        refetch();
      });
  };
  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || DASHBOARD - Manage Classes</title>
      </Helmet>
      <KeenSlider keenTitle="Manage Users" />

      <div className="px-4">
        <div className="grid my-6  gap-4">
          <div className="col-span-1 md:col-span-3">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">SL No</th>
                    <th className="px-4 py-2">PHOTO</th>
                    <th className="px-4 py-2">CLASS NAME</th>
                    <th className="px-4 py-2">STATUS</th>
                    <th className="px-4 py-2 text-center">STUDENT</th>
                    <th className="px-4 py-2 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((data, index) => (
                    <UsersCard
                      key={data._id}
                      data={data}
                      index={index}
                      handleRole={handleRole}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
