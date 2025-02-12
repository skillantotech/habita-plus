"use client";
import React, { useEffect, useState } from "react";

const Notice = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/email")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Email Page</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Notice;
