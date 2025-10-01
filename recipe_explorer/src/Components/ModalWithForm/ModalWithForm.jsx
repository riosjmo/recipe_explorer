import React from 'react';
import './ModalWithForm.css';

function ModalWithForm() {
    return (
        <div className="modal-with-form">
            <h2>Modal Title</h2>
            <form>
                <label>
                    Field 1:
                    <input type="text" name="field1" />
                </label>
                <label>
                    Field 2:
                    <input type="text" name="field2" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ModalWithForm;
