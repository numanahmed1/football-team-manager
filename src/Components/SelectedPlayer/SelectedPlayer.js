import React from "react";
import { Table } from "react-bootstrap";
import PlayerTable from "../PlayerTable/PlayerTable";
import "./SelectedPlayer.css";

const SelectedPlayer = ({ selectedPlayer }) => {
  console.log(selectedPlayer);
  const totalBudget = selectedPlayer.reduce(
    (totalBudget, selectedPlayer) => totalBudget + selectedPlayer.salary,
    0
  );

  return (
    <div className="selected-player">
      <h2 className="text-center">List of Selected Player</h2>
      <h3 className="text-center">Total Selected: {selectedPlayer.length}</h3>
      <div className="player-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {selectedPlayer.map((player) => (
              <PlayerTable player={player}></PlayerTable>
            ))}
            <tr>
              <td>
                <strong>Total Budget</strong>
              </td>
              <td>${totalBudget}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SelectedPlayer;
