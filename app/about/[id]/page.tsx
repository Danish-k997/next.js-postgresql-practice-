"use client";
import { useParams } from "next/dist/client/components/navigation";
import React from "react";

const Page = () => {
  const params = useParams();

  console.log(params);

  return <div>{params.id}</div>;
};

export default Page;
