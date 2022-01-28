import { Card, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/image/poke512.png";
import DownMenu from "../../components/downMenu";
import TopMenu from "../../components/topMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import "./details.css";

const Details = () => {
  const params = useParams();
  const [prop, setProp] = useState("");

  const handleCatch = () => {
    setProp(Math.floor(Math.random() * 2));
    if (prop === 1) {
      return swal({
        title: "Good job!",
        text: `You catch the pokemon ${params.name}`,
        icon: "success",
        button: "YEAHHH",
      });
    } else if (prop === 0) {
      return swal({
        title: "So Sad!",
        text: `You do not catch the pokemon ${params.name}`,
        icon: "warning",
        button: "UHHHH",
      });
    }
  };
  return (
    <div className="body-details">
      <TopMenu />
      <Container className="details-card">
        <Card className="details-pokemon">
          <Card.Body>
            <Row>
              <Col md={12} xs={4}>
                <img
                  alt=""
                  src={Logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top ms-auto img-details"
                />
              </Col>
              <Col md={12} xs={8}>
                <h3>
                  <strong>{params.name}</strong>
                </h3>
              </Col>

              <Col md={6} xs={6}>
                Moves
              </Col>
              <Col md={6} xs={6}>
                Types
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className="catch-button ">
          <center>
            <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top align-center cursor-pointer"
              onClick={() => handleCatch()}
            />
            <br />
            <h6>Catch me!</h6>
          </center>
        </div>
      </Container>
      <DownMenu />
    </div>
  );
};
export default Details;
