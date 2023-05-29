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
        // Formu sıfırla
        setName('');
        setSurname('');
        setDate('');
        setTime('');
        setEmail('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Randevu oluşturma işlemleri burada gerçekleştirilebilir

        setShowConfirmation(true);
    };

    return (
        <div className="cover-container">
            <img className="cover-image" src={cover} alt="Logo" />
            <div className="cover-content">
                <h1 className="cover-title">Explore the new BMW i4 range</h1>
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
                                    <label>
                                        Surname:
                                        <input
                                            type="text"
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Date:
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Time:
                                        <input
                                            type="time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </label>
                                    <button type="submit">Submit</button>
                                </form>
                                <button onClick={handleClose}>Kapat</button>
                            </div>
                        ) : (
                            <div className="modal-content">
                                <p>Sayın {name}, {date} {time} saatte test sürüşüne bekliyoruz!</p>
                                <button onClick={handleClose}>Kapat</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cover;
