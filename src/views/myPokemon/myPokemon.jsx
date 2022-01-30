// import Logo from "../../assets/image/poke512.png";
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
  useEffect(() => {
    // console.log(Pokemon);
    dispatch(allStore.getPokemon());
  }, [dispatch, Pokemon]);

  const handleRelease = () => {
    swal({
      title: "You want to release your pokemon?",
      text: "Once you release, you will not be able to recover it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Bye! Your pokemon has been released!", {
          icon: "success",
        });
      } else {
        swal("Your pokemon is safe!");
      }
    });
  };

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
                  <Card className="my-pokemon  shadow-sm" key={idx}>
                    {/* <img
                    alt=""
                    src={Logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top ms-auto img-pokemon"
                  /> */}
                    <Card.Body>
                      <Row>
                        <Col
                          md={8}
                          xs={8}
                          className="cursor-pointer pokemon-name"
                          onClick={() => navigate(`/${el.name}`)}
                        >
                          <h3>{el.name}</h3>
                        </Col>
                        <Col md={4} xs={4}>
                          <Button
                            variant="danger"
                            className="btn-release"
                            onClick={() => handleRelease()}
                          >
                            Release
                          </Button>
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
    </>
  );
};
export default MyPokemon;
