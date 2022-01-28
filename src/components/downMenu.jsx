import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/image/poke512.png";

const DownMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        fixed="bottom"
        className="navbar-mobile"
      >
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" onClick={() => navigate("/")}>
              <img
                alt=""
                src={Logo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />
              &nbsp; Pokemon List
            </Nav.Link>
            <div style={{ borderLeft: "1px solid grey", height: "40px" }}></div>
            <Nav.Link href="#features">
              <img
                alt=""
                src={Logo}
                width="25"
                height="25"
                className="d-inline-block align-top"
              />
              &nbsp;My Pokemon
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default DownMenu;
