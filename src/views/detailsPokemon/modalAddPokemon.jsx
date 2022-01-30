import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import allStore from "../../store/actions";

const ModalAdd = ({ show, onHide, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(nickName);
  }, [nickName]);

  const handleSave = () => {
    if (!nickName) {
      setError("can not be empty!");
    } else {
      dispatch(allStore.addPokemon({ name, nickName }));
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
            value={nickName}
            placeholder={error}
            onChange={(e) => setNickName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSave()}>Save</Button>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAdd;
