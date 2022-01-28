// import Logo from "../../assets/image/poke512.png";
import DownMenu from "../../components/downMenu";
import TopMenu from "../../components/topMenu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import allStore from "../../store/actions";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import "./list.css";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const Pokemon = useSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    // console.log(Pokemon);
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  return (
    <>
      <TopMenu />
      <Container className="list-card">
        <div>
          <h6 className="choose-text">
            <b> CHOOSE YOUR POKEMON</b>
          </h6>
          <Form.Control
            type="text"
            placeholder="Search Pokemon name"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Row className="mt-5">
          {Pokemon.filter((Pokemon) => Pokemon.name.includes(search)).length >
          0 ? (
            Pokemon.filter((Pokemon) => Pokemon.name.includes(search)).map(
              (el, idx) => (
                <Col md={4} sm={3} xs={12}>
                  <Card
                    className="card-pokemon cursor-pointer shadow-sm"
                    onClick={() => navigate(`/${el.name}`)}
                    key={idx}
                  >
                    {/* <img
                    alt=""
                    src={Logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top ms-auto img-pokemon"
                  /> */}
                    <Card.Body>
                      <h3>{el.name}</h3>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )
          ) : (
            <h4>Data not found.</h4>
          )}
        </Row>
      </Container>
      <DownMenu />
    </>
  );
};
export default List;
