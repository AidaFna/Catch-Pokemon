import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import Logo from "../assets/image/poke512.png";
import Text from "../assets/image/text.png";
import List from "../assets/image/pokemon-list.png";
import My from "../assets/image/my-pokemon.png";
import { useNavigate } from "react-router-dom";

import "./menu.css";

const TopMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand={false} fixed="top" className="navbar-top ">
        <Container>
          <Navbar.Brand className="mx-auto">
            <img
              alt=""
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-top "
            />
            &nbsp; &nbsp;
            <img
              alt=""
              src={Text}
              height="35"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="toggle-web"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <strong>MENU</strong>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <i class="bi bi-caret-right-fill"></i>
                  <img
                    alt=""
                    src={List}
                    height="30"
                    className="d-inline-block align-top"
                    onClick={() => navigate("/")}
                  />
                </Nav.Link>
                <Nav.Link>
                  <i class="bi bi-caret-right-fill"></i>
                  <img
                    alt=""
                    src={My}
                    height="30"
                    className="d-inline-block align-top"
                    onClick={() => navigate("/my-pokemon")}
                  />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default TopMenu;
