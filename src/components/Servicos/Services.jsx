/* eslint-disable react/no-unescaped-entities */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import photo from "../../assets/img/reparo-ar.jpg";

import style from "./Services.module.css";

export default function Services() {
  return (
    <Card className= {style.card}>
      <Card.Img variant="top" src={photo} style={{ width: "8rem" }} />
      <Card.Body className= {style.cardBody}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
