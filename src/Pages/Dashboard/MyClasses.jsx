import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";

import axios, { Axios } from "axios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import SelectedClassesData from "./SelectedClassesData";
import MyClassCard from "../../Components/MyClassCard";

const MyClasses = () => {
  //   const {
  //     data: classData = [],
  //     isLoading: loading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["classData"],
  //     queryFn: async () => {
  //       const res = await axios.get("http://localhost:5000/classes");
  //       return res.data;
  //     },
  //   });

  const {
    data: classData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classData", { email: "user@example.com" }],
    queryFn: async ({ queryKey }) => {
      const [, params] = queryKey;
      const email = params.email;
      const res = await axios.get("http://localhost:5000/selectedClass", {
        params: { email },
      });
      return res.data;
    },
  });

  return (
    <div className="container mx-auto border  text-center">
      <Helmet>
        <title>LOTUSGROVE || DASHBOARD</title>
      </Helmet>
      <KeenSlider keenTitle="MY Selected Classes" />
      <div className="px-4">
        <div className="grid my-6  gap-4">
          <div className="col-span-1 md:col-span-3">
            <div className="overflow-x-auto ">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">SL No</th>
                    <th className="px-4 py-2">PHOTO</th>
                    <th className="px-4 py-2">CLASS NAME</th>
                    <th className="px-4 py-2">STATUS</th>
                    <th className="px-4 py-2">STUDENT</th>
                    <th className="px-4 py-2">FEEDBACK</th>
                    <th className="px-4 py-2">EDIT</th>
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
