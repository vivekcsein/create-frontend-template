"use client";
import { RootState } from "@/libs/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard_main = () => {
  const Iuser = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard {Iuser?.fullname}</h1>
      <p>Welcome to your dashboard!</p>
    </>
  );
};

export default Dashboard_main;
