import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";

import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import SelectedClassesData from "./SelectedClassesData";

const SelectedClasses = () => {
  const {
    data: classData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classData"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/selectedClass");
      return res.data;
    },
  });
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/selectedClass/${id}`).then((data) => {
      console.log(data.data);
      if (data.data.deletedCount > 0) {
        refetch();
        toast.success("🦄 Delete Selection", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };

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
                    <th className="px-4 py-2">NAME</th>
                    <th className="px-4 py-2">PHOTO</th>
                    <th className="px-4 py-2">EMAIL</th>
                    <th className="px-4 py-2">SEATS</th>
                    <th className="px-4 py-2">PRICE</th>
                    <th className="px-4 py-2">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {classData.map((data, index) => (
                    <SelectedClassesData
                      key={data._id}
                      data={data}
                      handleDelete={handleDelete}
                      index={index}
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
export default SelectedClasses;
