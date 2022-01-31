import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import allStore from "../../store/actions";

const ModalAdd = ({ show, onHide, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nickname, setNickName] = useState("");
  const MyPokemon = useSelector(({ myPokemon }) => myPokemon);

  useEffect(() => {
    // console.log(MyPokemon);
  }, [MyPokemon]);
  useEffect(() => {
    console.log(nickname);
  }, [nickname]);

  const handleSave = () => {
    if (!nickname) {
      swal("Oh No!", "give me nickname before you save me!", "warning");
    } else if (
      MyPokemon.filter((MyPokemon) => MyPokemon.nickname.includes(nickname))
        .length > 0 &&
      MyPokemon.filter((MyPokemon) => MyPokemon.name.includes(name)).length > 0
    ) {
      swal("Oh No!", "give me another nickname please!", "warning");
    } else {
      dispatch(allStore.addPokemon({ name, nickname }));
      navigate("/my-pokemon");
      swal({
        title: "Good job!",
        text: `You catch the pokemon ${name}`,
        icon: "success",
        button: "YEAHHH",
      });
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            You Catch The Pokemon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Want to save it?</h4>
          <p>Give it a nickname:</p>
          <Form.Control
            type="text"
            value={nickname}
            placeholder="give me nickname"
            onChange={(e) => setNickName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSave()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAdd;
