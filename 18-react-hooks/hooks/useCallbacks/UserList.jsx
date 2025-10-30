import React from "react";

const UserList = React.memo(({ users }) => {
  console.log("Logs From UserList", users);
  console.log("UserList rendered!");
  return (
    <ul>
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <li
              key={user.id}
              style={{
                listStyle: "none",
                width: "fit-content",
                padding: "5px 8px",
                margin: "5px",
              }}
            >
              {user.name}
            </li>
          );
        })
      ) : (
        <p
          style={{
            backgroundColor: "red",
            padding: "15px",
            border: "1px solid gray",
            color: "#000",
          }}
        >
          No Users Found...
        </p>
      )}
    </ul>
  );
});

export default UserList;
