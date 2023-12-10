import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const showUser = () => {
    const userName = users.map((user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map((item) => {
              return (
                <span className={`badge bg-${item.color} m-1`}>
                  {item.name}
                </span>
              );
            })}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <button className="btn btn-danger" onClick={() => handeleDel(user)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return userName;
  };

  const getQualities = () => {};

  const handeleDel = (userItem) => {
    setUsers((prevState) => prevState.filter((id) => id._id !== userItem._id));
    showTable();
  };

  const setQuantityPeople = () => {
    if (users.length <= 4 && users.length > 1) {
      return "человека";
    } else {
      return "человек";
    }
  };

  const setClassBadgeTitle = () => {
    if (users.length > 0) {
      return `bg-primary`;
    } else {
      return `bg-danger`;
    }
  };

  const showTable = () => {
    if (users.length <= 1) {
      return document.querySelector("table").remove();
    }
  };

  return (
    <>
      <div className={`badge ${setClassBadgeTitle()} fs-3 m-1`}>{`${
        users.length
      } ${setQuantityPeople()} тусанет с тобой сегодня`}</div>
      <table className="table fs-5">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Проффесия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col" colSpan="2">
              Оценка
            </th>
          </tr>
        </thead>
        <tbody>
          <>{showUser()}</>
        </tbody>
      </table>
    </>
  );
};

export default Users;
