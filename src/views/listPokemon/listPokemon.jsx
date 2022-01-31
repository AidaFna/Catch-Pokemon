import DownMenu from "../../components/downMenu";
import TopMenu from "../../components/topMenu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import allStore from "../../store/actions";
import { Card, Container, Row, Col, Form, Badge } from "react-bootstrap";
import "./list.css";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const Pokemon = useSelector(({ pokemon }) => pokemon);
  const MyPokemon = useSelector(({ myPokemon }) => myPokemon);
  useEffect(() => {
    // console.log(Pokemon);
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  return (
    <div key={1}>
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
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
                    <Card.Body>
                      <Row>
                        <Col md={10} xs={10} className="pokemon-name">
                          <h3>{el.name}</h3>
                        </Col>
                        <Col md={2} xs={2}>
                          <Badge bg="secondary">
                            {
                              MyPokemon.filter((MyPokemon) =>
                                MyPokemon.name.includes(el.name)
                              ).length
                            }
                          </Badge>
                        </Col>
                      </Row>
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
    </div>
  );
};
export default List;
