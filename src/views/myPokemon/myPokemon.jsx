import DownMenu from "../../components/downMenu";
import TopMenu from "../../components/topMenu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import allStore from "../../store/actions";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import "./myPokemon.css";

const MyPokemon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const Pokemon = useSelector(({ pokemon }) => pokemon);
  const MyPokemon = useSelector(({ myPokemon }) => myPokemon);

  useEffect(() => {
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  useEffect(() => {
    console.log(MyPokemon);
  }, [MyPokemon]);

  const handleRelease = (id) => {
    swal({
      title: "You want to release your pokemon?",
      text: "Once you released, you will not be able to recover it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(allStore.deletePokemon(id));
        swal("Bye! Your pokemon has been released!", {
          icon: "success",
        });
      } else {
        swal("Your pokemon is safe!");
      }
    });
  };

  return (
    <div key={3}>
      <TopMenu />
      <Container className="list-card">
        <div>
          <h6 className="choose-text">
            <b> FIND YOUR POKEMON</b>
          </h6>
          <Form.Control
            type="text"
            placeholder="Search Pokemon name"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <Row className="mt-5">
          {MyPokemon.filter((MyPokemon) => MyPokemon.name.includes(search))
            .length > 0 ? (
            MyPokemon.filter((MyPokemon) =>
              MyPokemon.name.includes(search)
            ).map((el, idx) => (
              <Col md={4} sm={3} xs={12}>
                <Card className="my-pokemon  shadow-sm" key={idx}>
                  <Card.Body>
                    <Row>
                      <Col
                        md={8}
                        xs={8}
                        className="cursor-pointer pokemon-name"
                        onClick={() => navigate(`/${el.name}`)}
                      >
                        <h3>{el.name}</h3>
                        <h6>nickname: {el.nickname}</h6>
                      </Col>
                      <Col md={4} xs={4}>
                        <Button
                          variant="danger"
                          className="btn-release"
                          onClick={() => handleRelease(el.id)}
                        >
                          Release
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h5>You don not have any pokemon.</h5>
          )}
        </Row>
      </Container>
      <DownMenu />
    </div>
  );
};
export default MyPokemon;
