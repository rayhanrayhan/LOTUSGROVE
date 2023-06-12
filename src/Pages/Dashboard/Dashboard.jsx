import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";
import ClassesAllCard from "../Classes/ClassesAllCard";
import DashBoardData from "./DashBoardData";
import LeftBar from "./LeftBar";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/selectedClass")
      .then((res) => res.json())
      .then((data) => {
        setDashboardData(data);
      });
  }, []);

  return (
    <div className="container mx-auto border">
      <Helmet>
        <title>LOTUSGROVE || DASHBOARD</title>
      </Helmet>
      <KeenSlider keenTitle="Our Classes" />
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <LeftBar></LeftBar>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="font-bold text-xl">Trending Categories</div>
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
                {dashboardData.map((data, index) => (
                  <DashBoardData key={data.classId} data={data} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
