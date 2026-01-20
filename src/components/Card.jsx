import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      {data?.map((d) => {
        return (
          <div className="flex flex-wrap flex-col border bg-blue-400 text-white p-2">
            <span>{d?.userId}</span>
            <span>{d?.title}</span>
            <span>{d?.completed}</span>
          </div>
        );
      })}
    </>
  );
};

export default Card;
