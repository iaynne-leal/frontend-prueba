"use client";
import { apiSystem } from "@/api";
import { Carousel, DataScroller, Navbar } from "./agencies/components";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const getAgencies = async (value) => {
    await apiSystem
      .get(`/Agency?search=${value}`)
      .then((response) => {
        const res = response?.data?.agency.map((a) => ({
          ...a.dataValues,
          schedules: a.schedules,
        }));
        console.log(res);
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAgencies(search);
    console.log("first",search)
  }, [search]);
  return (
    /*  <Carousel data = {data}>
       
    </Carousel> */
    <div>
      <Navbar search={setSearch} ></Navbar>
      <DataScroller data={data}></DataScroller>
    </div>
  );
};

export default page;
