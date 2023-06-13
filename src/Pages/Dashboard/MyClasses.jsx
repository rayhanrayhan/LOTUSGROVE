import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import MyClassCard from "../../Components/MyClassCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const {
    data: classData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classData", user?.email], // Include user email in the queryKey
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/classes/${user?.email}`
      ); // Pass the user email in the URL
      return res.data;
    },
  });

  return (
    <div className="container mx-auto border">
      <Helmet>
        <title>LOTUSGROVE || DASHBOARD</title>
      </Helmet>
      <KeenSlider keenTitle="MY Selected Classes" />
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
                    <th className="px-4 py-2">STUDENT</th>
                    <th className="px-4 py-2">FEEDBACK</th>
                    <th className="px-4 py-2">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {classData.map((data, index) => (
                    <MyClassCard key={data._id} data={data} index={index} />
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

export default MyClasses;
