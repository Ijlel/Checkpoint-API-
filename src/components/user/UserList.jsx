import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erreur de récupération des users:", error);
      });
  }, []);

  return (
    <div>
      {users.map((user, index) => <UserCard user={user} key={index} /> )}
    </div>
  );
};

export default UserList;
