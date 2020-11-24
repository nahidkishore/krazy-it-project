import React, { useState } from "react";
import Draggable from "react-draggable";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import shirt from "../../images/t-shirt.jpg";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const WriteText = () => {
  const { register, handleSubmit, errors } = useForm();
  const [action, setAction] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const onSubmit = (data) => {
    setAction(data.text);
  };
  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-center my-5">
          <div>
            <button className="btn btn-success" onClick={openModal}>
              Write text here{" "}
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <img
              src={shirt}
              alt=""
              className="img-fluid"
              height="300px"
              width="300px"
            />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>Write Text here</h2>
              <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    ref={register({ required: true })}
                    name="text"
                    placeholder="Write some text here"
                  />
                  {errors.text && (
                    <span className="text-danger">
                      This field must be required{" "}
                    </span>
                  )}
                </div>

                <div className="form-group d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>

        <Draggable>
          <div className="d-flex justify-content-center">
            <div>{action}</div>
          </div>
        </Draggable>
      </div>
    </section>
  );
};

export default WriteText;
