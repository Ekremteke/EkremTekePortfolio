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
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    {!showConfirmation ? (
                        <>
                            <h2 className="modal-title">Request Information</h2>
                            <form onSubmit={handleSubmit} className="modal-form">
                                <label htmlFor="name">
                                    Name:
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        aria-required="true"
                                        aria-label="Name"
                                    />
                                </label>
                                <label htmlFor="surname">
                                    Surname:
                                    <input
                                        id="surname"
                                        type="text"
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                        aria-required="true"
                                        aria-label="Surname"
                                    />
                                </label>
                                <label htmlFor="date">
                                    Date:
                                    <input
                                        id="date"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        aria-required="true"
                                        aria-label="Date"
                                    />
                                </label>
                                <label htmlFor="time">
                                    Time:
                                    <input
                                        id="time"
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        aria-required="true"
                                        aria-label="Time"
                                    />
                                </label>
                                <label htmlFor="email">
                                    Email:
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-required="true"
                                        aria-label="Email"
                                    />
                                </label>
                                <div className="form-buttons">
                                    <button className='btn-submit' type="submit">Submit</button>
                                    <button className='btn-close' onClick={handleClose}>Close</button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h2 className="modal-title">Confirmation</h2>
                            <p>
                                Dear {name} {surname},
                                <br />Your invitation on {date} at {time} will be considered,
                                and you will be notified at the earliest convenience.
                                <br />
                                Kind regards,
                            </p>
                            <button className='btn-close' onClick={handleClose}>Close</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyFormComponent;
