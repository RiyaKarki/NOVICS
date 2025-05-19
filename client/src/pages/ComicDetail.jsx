import { useParams } from "react-router-dom";
import React from "react";

export default function ComicDetail() {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Comic Details for ID: {id}</h1>
    </div>
  );
}
