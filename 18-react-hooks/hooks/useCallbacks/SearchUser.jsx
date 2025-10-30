import { useCallback, useMemo, useState } from "react";
import UserList from "./UserList";

const SearchUser = () => {
  const [search, setSearch] = useState("");

  const user = [
    { id: 1, name: "Shubham" },
    { id: 2, name: "Amol" },
    { id: 3, name: "Amit" },
    { id: 4, name: "Sneha" },
    { id: 5, name: "Priya" },
  ];

  const filteredUser = useMemo(() => {
    console.log("Filtering users...");
    return user.filter((user) => {
      user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, user]);

  console.log("Fitered Users: ", filteredUser);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Search Example</h1>
      <input type="text" onChange={handleSearchChange} value={search} />

      <UserList users={filteredUser} />
    </div>
  );
};

export default SearchUser;
