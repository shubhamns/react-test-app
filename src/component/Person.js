import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, searchUsers, getUserDeatils } from "./../actions/user";
import PersonDetail from "./PersonDetail";

const Person = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    dispatch(searchUsers(search));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      dispatch(getUsers());
    }
  };

  const handleSelect = (id) => {
    dispatch(getUserDeatils(id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        justifyItems: "center",
      }}
    >
      <div>
        <input type="text" onChange={handleSearch} />
        {users.userList.length > 0 &&
          users.userList.map((item, index) => {
            return (
              <div
                style={{ border: "1px solid", margin: 5 }}
                key={index}
                onClick={() => handleSelect(item.login.uuid)}
              >
                <p>{item.login.uuid}</p>
                <p>{`${item.name.first} ${item.name.last}`}</p>
                <p>{item.email}</p>
                <p>{item.gender}</p>
                <p>{item.login.city}</p>
              </div>
            );
          })}
      </div>

      <div>
        {users.userDeatils && <PersonDetail user={users.userDeatils[0]} />}
      </div>
    </div>
  );
};

export default Person;
