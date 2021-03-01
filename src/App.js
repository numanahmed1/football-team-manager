import "./App.css";
import playersData from "./Data/fakeData.json";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCard from "./Components/PlayerCard/PlayerCard";
import SelectedPlayer from "./Components/SelectedPlayer/SelectedPlayer";

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playersData);
  }, []);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handleBtnClick = (players) => {
    const newSelectedPlayer = [...selectedPlayer, players];
    setSelectedPlayer(newSelectedPlayer);
  };
  return (
    <div className="app">
      <div className="card-container">
        <Container>
          <Row>
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                handleBtnClick={handleBtnClick}
                player={player}
              ></PlayerCard>
            ))}
          </Row>
        </Container>
      </div>
      <div className="selected-player-container">
        <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>
      </div>
    </div>
  );
}

export default App;
