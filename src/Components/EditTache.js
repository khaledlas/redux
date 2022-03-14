import React, { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../features/todoSlice";
import EditIcon from "@mui/icons-material/Edit";
import "./EditTache.css";

const EditTache = ({ text, done, id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //MAJ
  const dispatch = useDispatch();
  const [newText, setnewText] = useState(text);
  const miseAjour = () => {
    dispatch(
      editTask({
        id,
        text: newText,
      })
    );
    handleClose();
  };

  return (
    <div>
      <EditIcon className="icon_hover" onClick={handleShow}></EditIcon>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mettez à jour votre tâche </Modal.Title>
        </Modal.Header>
        <InputGroup>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            value={newText}
            onChange={(e) => setnewText(e.target.value)}
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermez
          </Button>
          <Button variant="primary" onClick={miseAjour}>
            Enregistrez
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTache;
