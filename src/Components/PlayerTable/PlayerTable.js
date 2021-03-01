import React from "react";
import "./PlayerTable.css";

const PlayerTable = ({ player }) => {
  const { name, salary } = player;
  return (
    <tr>
      <td>{name}</td>
      <td>${salary}</td>
    </tr>
  );
};

export default PlayerTable;
