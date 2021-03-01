import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./PlayerCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const PlayerCard = ({ player, handleBtnClick }) => {
  const {
    name,
    img,
    country_url,
    position,
    height,
    current_team,
    salary,
  } = player;
  return (
    <Col className="mt-3" xs={12} md={6} lg={4}>
      <Card className="p-0 player-card h-100">
        <div className="card-top-img">
          <Card.Img variant="top" src={country_url} />
          <div className="overlay"></div>
        </div>
        <div className="card-player-img">
          <img src={img} alt="" />
        </div>
        <Card.Body className="player-card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Position:</strong> {position}
          </Card.Text>
          <Card.Text>
            <strong>Height:</strong> {height}
          </Card.Text>
          <Card.Text>
            <strong>Current Team: </strong> {current_team}
          </Card.Text>
          <Card.Text>
            <strong>Salary:</strong> ${salary}
          </Card.Text>
          <Button
            onClick={() => handleBtnClick(player)}
            className="cart-btn"
            variant="primary"
          >
            <FontAwesomeIcon className="icon" icon={faPlus} /> Add to team
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PlayerCard;
