import React from "react";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageClassCard from "../../Components/ManageClassCard";

const ManageClasses = () => {
  const {
    data: classesData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: async () => {
      const res = await axios.get(
        "https://lotusgrove-server-site.vercel.app/classes"
      );
      return res.data;
    },
  });

  const pendingData = classesData.filter((item) => item.status === "pending");
  const denyData = classesData.filter((item) => item.status === "denied");
  const approvedData = classesData.filter((item) => item.status === "approved");

  const handleStatus = (id, status) => {
    axios
      .patch(`https://lotusgrove-server-site.vercel.app/classes/${id}`, {
        status,
      })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          alert("update");
          refetch();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || DASHBOARD - Manage Classes</title>
      </Helmet>
      <KeenSlider keenTitle="Manage Classes" />

      <div className="flex flex-col gap-4">
        {pendingData.map((singleClass) => (
          <ManageClassCard
            key={singleClass._id}
            singleClass={singleClass}
            handleStatus={handleStatus}
          ></ManageClassCard>
        ))}

        {denyData.map((singleClass) => (
          <ManageClassCard
            key={singleClass._id}
            singleClass={singleClass}
            handleStatus={handleStatus}
          ></ManageClassCard>
        ))}
        {approvedData.map((singleClass) => (
          <ManageClassCard
            key={singleClass._id}
            singleClass={singleClass}
            handleStatus={handleStatus}
          ></ManageClassCard>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
