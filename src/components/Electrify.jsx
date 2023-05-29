import React, { useState } from 'react';
import image from "../images/electiric.png"

function Electrify() {
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
        <div>
            <div className="electrify-container">
                <div className="electrify-image-container">
                    <img className="electrify-image" src={image} alt="interior-image" />
                </div>
                <div className="electrify-content-container">
                    <h3 className="electrify-title">Electrifying performance with the BMW i4</h3>
                    <p className="electrify-text">
                        From the cool Trend and SUV-inspired Active to the sporty ST-Line,
                        the eighth generation Fiesta impresses across the range.
                    </p>
                    <div className="time-container">
                        <div className="electrifying-container">
                            <h3>02:05 hr</h3>
                            <p className="text">Charging at home for a Range of 62 miles</p>
                        </div>
                        <div className="electrifying-container2">
                            <h3>365</h3>
                            <p className="text">Electric range in miles</p>
                        </div>
                    </div>
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
            <div className="electrify-container-mobile">
                <div className="electrify-image-container-mobile">
                    <img className="electrify-image-mobile" src={image} alt="interior-image" />
                </div>
                <div className="electrify-content-container-mobile">
                    <h1 className="electrify-title-mobile">Electrifying performance with the BMW i4</h1>
                    <p className="electrify-text-mobile">
                        From the cool Trend and SUV-inspired Active to the sporty ST-Line,
                        the eighth generation Fiesta impresses across the range.
                    </p>
                    <div className="time-container">
                        <div className="electrifying-container-mobile">
                            <h1>02:05 hr</h1>
                            <p className="text">Charging at home for a Range of 62 miles</p>
                        </div>
                        <div className="electrifying-container2-mobile">
                            <h1>365</h1>
                            <p className="text">Electric range in miles</p>
                        </div>
                    </div>
                    <button className="btn-test-drive-mobile2" onClick={handleOpen}>
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
    )
}

export default Electrify