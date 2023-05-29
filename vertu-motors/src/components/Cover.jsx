import React, { useState } from 'react';
import cover from "../images/cover-desktop.png";

function Cover() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
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
    };

    return (
        <div className="cover-container">
            <div className="image-container">
                <img className="cover-image" src={cover} alt="Logo" />
                <div className="cover-content">
                    <h3 className="cover-title">Explore the new BMW i4 range</h3>
                    <p className="cover-text">
                        From the cool Trend and SUV-inspired Active to the sporty ST-Line,
                        the eighth generation Fiesta impresses across the range.
                    </p>
                    <button className="btn-test-drive" onClick={handleOpen}>
                        Book a test drive
                    </button>
                    {isOpen && (
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
                                        <br />Your appointment has adjusted on {date} at {time}. We will be happy to see you.
                                        <br />
                                        Kind regards,
                                    </p>
                                    <br />
                                    <button className='btn-test-drive' onClick={handleClose}>Close</button>
                                </div>
                            )}
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
}

export default Cover;
