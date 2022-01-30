import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/poke512.png";
import "./landing.css";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="body-landing" key={0}>
      <center>
        <img
          alt=""
          src={Logo}
          width="80"
          height="80"
          className="d-inline-block align-top ms-auto img-landing"
        />
        <div className="text-start" onClick={() => navigate("/")}>
          <h4>
            <center>Click to start</center>
          </h4>
        </div>
        <div className="text-copyright">
          pokemon-catcher@2022
          <br /> by Aida Amrina
        </div>
      </center>
    </div>
  );
};
export default Landing;
