import { Card, Container, Row, Col, ProgressBar } from "react-bootstrap";
import Logo from "../../assets/image/poke512.png";
import DownMenu from "../../components/downMenu";
import TopMenu from "../../components/topMenu";
import ModalAdd from "./modalAddPokemon";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import allStore from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [prop, setProp] = useState("");
  const Details = useSelector(({ details }) => details);
  const Types = useSelector(({ types }) => types);
  const Moves = useSelector(({ moves }) => moves);
  const Abilities = useSelector(({ abilities }) => abilities);
  const Stats = useSelector(({ stats }) => stats);
  const Sprites = useSelector(({ sprites }) => sprites);

  useEffect(() => {
    dispatch(allStore.getDetails(name));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(allStore.getTypes(name));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(allStore.getMoves(name));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(allStore.getAbilities(name));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(allStore.getStats(name));
  }, [dispatch, name]);

  useEffect(() => {
    // console.log(Sprites);
    dispatch(allStore.getSprites(name));
  }, [dispatch, name, Sprites]);

  const handleCatch = () => {
    setProp(Math.floor(Math.random() * 2));
    if (prop === 1) {
      setModalShow(true);
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
    <div className="body-details" key={2}>
      <TopMenu />
      <Container className="details-card">
        <Card className="details-pokemon">
          <Card.Body>
            <Row>
              <Col md={12} xs={4}>
                <img
                  alt={Details.name}
                  src={Sprites.front_default}
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
                {Types.map((el, idx) => (
                  <h6 className="dtl-data" key={idx}>
                    {el.type.name}
                  </h6>
                ))}
              </Col>
              <Col md={6} xs={5}>
                <h5 className="dtl-title">Top 5 Moves</h5>
                {Moves.slice(0, 5).map((el, idx) => (
                  <h6 className="dtl-data">{el.move.name}</h6>
                ))}
              </Col>
              <Col md={6} xs={4}>
                <h5 className="dtl-title">Abilities</h5>
                {Abilities.slice(0, 5).map((el, idx) => (
                  <h6 className="dtl-data">{el.ability.name}</h6>
                ))}
              </Col>
              <Col md={12} xs={12}>
                {Stats.map((el, idx) => (
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
      <ModalAdd
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={name}
      />
    </div>
  );
};
export default Details;
