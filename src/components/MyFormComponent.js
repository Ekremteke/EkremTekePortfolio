// MyFormComponent.js
import React, { useState } from 'react';

function MyFormComponent({ onRequestClose, onSubmit }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleClose = () => {
        onRequestClose();
        setShowConfirmation(false);
        setName('');
        setSurname('');
        setDate('');
        setTime('');
        setEmail('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
        onSubmit({ name, surname, date, time, email });
    };

    return (
        <div className="modal">
            {!showConfirmation ? (
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Surname:
                            <input
                                type="text"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Date:
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Time:
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <br />
                        <button className='btn-test-drive' type="submit">Submit</button>
                    </form>
                    <br />
                    <button className='btn-test-drive' onClick={handleClose}>Close</button>
                </div>
            ) : (
                <div className="modal-content">
                    <p>Dear {name} {surname},
                        <br />Your invitation on {date} at {time} will be considered,
                        and you will be notified at the earliest convenience.
                        <br />
                        Kind regards,
                    </p>
                    <br />
                    <button className='btn-test-drive' onClick={handleClose}>Close</button>
                </div>
            )}
        </div>
    );
}

export default MyFormComponent;
