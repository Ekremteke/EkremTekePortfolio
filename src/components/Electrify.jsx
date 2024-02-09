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
                    <h3 className="electrify-title">Volunteer Activities</h3>
                    <p className="electrify-text">
                        Engages in volunteerism, contributing calligraphy skills and supporting charity initiatives, 
                        while fostering community connections. 
                        <br />
                        <br />
                        Click the request button if you'd like to invite him to 
                        contribute calligraphy to your upcoming events organized for social causes.
                    </p>
                    <div className="time-container">
                        <div className="electrifying-container">
                            <h3> </h3>
                            <p className="text"> </p>
                        </div>
                        <div className="electrifying-container2">
                            <h3> </h3>
                            <p className="text"> </p>
                        </div>
                    </div>
                    <button className="btn-test-drive" onClick={handleOpen}>
                        Request
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
            <div className="electrify-container-mobile">
                <div className="electrify-image-container-mobile">
                    <img className="electrify-image-mobile" src={image} alt="interior-image" />
                </div>
                <div className="electrify-content-container-mobile">
                    <h1 className="electrify-title-mobile">Volunteer Activities</h1>
                    <p className="electrify-text-mobile">
                        Engages in volunteerism, contributing calligraphy skills and supporting charity initiatives,
                        while fostering community connections.
                        <br />
                        <br />
                        Click the request button if you'd like to invite him to
                        contribute calligraphy to your upcoming events organized for social causes.
                    </p>
                    <div className="time-container">
                        <div className="electrifying-container-mobile">
                            <h1></h1>
                            <p className="text"></p>
                        </div>
                        <div className="electrifying-container2-mobile">
                            <h1></h1>
                            <p className="text"></p>
                        </div>
                    </div>
                    <button className="btn-test-drive-mobile2" onClick={handleOpen}>
                        Request
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
    )
}

export default Electrify