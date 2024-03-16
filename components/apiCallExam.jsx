"use client";
import React, { useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://webdev2-class-demo.vercel.app/api/sampleReqs/ehen2rfow"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={handleClick}>
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="text-center mt-4">
          <p className="font-bold">Secret Code:</p>
          <p>{secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
