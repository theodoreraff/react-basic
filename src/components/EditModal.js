import React, { Component } from "react";
import Button from "./Button";

class EditModal extends Component {
    render() {
        const { edit, close, data, change, update } = this.props;
        if (edit) {
            return (
                <div style={modalEdit}>
                    <h3>Edit Task</h3>
                    <div>
                        <input
                            type="text"
                            value={data.title}
                            onChange={change}
                        />
                    </div>
                    <div style={buttonContainer}>
                        <Button text="edit" action={update} />
                        <Button text="cancel" action={close} />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default EditModal;

const modalEdit = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000
};

const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem"
};
