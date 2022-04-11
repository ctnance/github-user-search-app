import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { userDataContext } from "../userDataContext";

function Main() {
  const { userData, error } = useContext(userDataContext);
  console.log(userData);
  return (
    <main>
      <SearchBar />
      {userData && <UserCard />}
    </main>
  );
}

export default Main;
