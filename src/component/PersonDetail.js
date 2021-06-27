import React from "react";

const PersonDetail = ({ user }) => {
  return (
    <div>
      {
        <ul>
          <li>{`${user?.name?.first} ${user?.name?.last}`}</li>
          <li>{user?.email}</li>
          <li>{user?.gender}</li>
          <li>{user?.location?.city}</li>
        </ul>
      }
    </div>
  );
};

export default PersonDetail;
