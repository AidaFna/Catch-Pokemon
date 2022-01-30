import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";
import Logo from "../../assets/image/poke512.png";
import DownMenu from "../../components/downMenu";
import TopMenu from "../../components/topMenu";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import allStore from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [prop, setProp] = useState("");
  const Details = useSelector(({ details }) => details);

  useEffect(() => {
    // console.log(Details);
    dispatch(allStore.getDetails(name));
  }, [dispatch, name]);

  const handleCatch = () => {
    setProp(Math.floor(Math.random() * 2));
    if (prop === 1) {
      return swal({
        title: "Good job!",
        text: `You catch the pokemon ${name}`,
        icon: "success",
        button: "YEAHHH",
      });
    } else if (prop === 0) {
      return swal({
        title: "So Sad!",
        text: `You do not catch the pokemon ${name}`,
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
                  alt={Details.name}
                  src={Details.sprites.front_default}
                  height="100"
                  className="d-inline-block align-top img-details"
                />
              </Col>
              <Col md={12} xs={8} className="pokemon-name">
                <h3>
                  <strong>{Details.name}</strong>
                </h3>
              </Col>
              <Col md={6} xs={3}>
                <h5 className="dtl-title">Types</h5>
                {Details.types.map((el, idx) => (
                  <h6 className="dtl-data">{el.type.name}</h6>
                ))}
              </Col>
              <Col md={6} xs={5}>
                <h5 className="dtl-title">Top 5 Moves</h5>
                {Details.moves.slice(0, 5).map((el, idx) => (
                  <h6 className="dtl-data">{el.move.name}</h6>
                ))}
              </Col>
              <Col md={6} xs={4}>
                <h5 className="dtl-title">Abilities</h5>
                {Details.abilities.slice(0, 5).map((el, idx) => (
                  <h6 className="dtl-data">{el.ability.name}</h6>
                ))}
              </Col>
              <Col md={12} xs={12}>
                {Details.stats.map((el, idx) => (
                  <Row>
                    <Col md={4} xs={4}>
                      <h5 className="dtl-title">{el.stat.name}</h5>
                    </Col>
                    <Col md={2} xs={2}>
                      <h5 className="dtl-title">{el.base_stat}</h5>
                    </Col>
                    <Col md={6} xs={6}>
                      <ProgressBar variant="danger" now={el.base_stat} />
                    </Col>
                  </Row>
                ))}
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
