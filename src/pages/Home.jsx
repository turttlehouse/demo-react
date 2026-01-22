import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [users, setUsers] = useState();

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://6970361278fec16a63fd1d48.mockapi.io/api/user",
      );
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    console.log("first page load");

    fetchUser();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 p-5">
        {/* map - data lai loop garera dekhauna display garna */}
        {users?.map((user) => {
          return <Card user={user} />;
        })}
      </div>
    </div>
  );
};

export default Home;
