import React, { FC } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
interface Props {
  item?: any;
}

const User: FC<Props> = ({ item }) => {
  const parseTime = (duration: number) => {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    var hours_ = hours < 10 ? "0" + hours : hours;
    var minutes_ = minutes < 10 ? "0" + minutes : minutes;
    var seconds_ = seconds < 10 ? "0" + seconds : seconds;

    return hours_ + ":" + minutes_ + ":" + seconds_ + "." + milliseconds;
  };
  return (
    <>
      <Col>
        <Card className="mb-4 mt-4" style={{ width: "18rem", padding: "10px" }}>
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{item.email}</Card.Title>
            <Card.Text className="mb-2 text-muted">{item.fullname}</Card.Text>

            <Card.Title style={{ color: "black" }}>
              Time Spent: {parseTime(item.time_spent)}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default User;
