import React, { useState } from 'react';
import cover from "../images/Cover-desktop.jpg";
import mobile from "../images/cover_mobile.jpeg";

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
            <div className='cover-mobile'>
                {isOpen && (
                    <div className="modal-mobile">
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

                )}
                <img className="mobile-image" src={mobile} alt="Logo" />
                <div className="mobile-cover-content">
                    <h1 className="mobile-cover-title">Full-Stack Software Developer</h1>
                    <p className="mobile-cover-text">
                        Completed an intensive one-year training program,
                        gaining practical experience in JavaScript, React.js, HTML, CSS,Java, PostgreSQL, Node.js, and AWS Cloud Computing.
                    </p>
                    <button className="btn-test-drive-mobile" onClick={handleOpen}>
                        Request Information
                    </button>

                </div>
            </div>
            <div className="image-container">
                <img className="cover-image" src={cover} alt="Logo" />
                <div className="cover-content">
                    <h3 className="cover-title">Full-Stack Software Developer</h3>
                    <p className="cover-text">
                        Completed an intensive one-year training program,
                        gaining practical experience in JavaScript, React.js, HTML, CSS,Java, PostgreSQL, Node.js, and AWS Cloud Computing.
                    </p>
                    <button className="btn-test-drive" onClick={handleOpen}>
                        Request Information
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

                    )}
                </div>
            </div>
        </div>
    );
}

export default Cover;
