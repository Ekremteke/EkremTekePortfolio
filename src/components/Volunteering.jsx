import React, { useState } from 'react';
import image from "../images/volunteering.jpg";
import MyFormComponent from './MyFormComponent';

function Volunteering() {
    const [isOpen, setIsOpen] = useState(false);
    /* eslint-disable no-unused-vars */
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    /* eslint-enable no-unused-vars */
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

    const handleSubmit = (formData) => {
        // Handle form data submission logic here
        console.log('Form Data from Volunteering:', formData);
        setShowConfirmation(true);
    };

    return (
        <div>
            <div className="volunteering-container">
                {isOpen && (
                    <MyFormComponent
                        onRequestClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                )}
                <div className="volunteering-image-container">
                    <img className="volunteering-image" src={image} alt="Volunteering" />
                </div>
                <div className="volunteering-content-container">
                    <h3 className="volunteering-title">Volunteer Activities</h3>
                    <p className="volunteering-text">
                        Engages in volunteerism, contributing calligraphy skills and supporting charity initiatives,
                        while fostering community connections.
                        <br />
                        <br />
                        Click the request button if you'd like to invite him to
                        contribute calligraphy to your upcoming events organized for social causes.
                    </p>
                    <button className="btn-test-drive" onClick={handleOpen}>
                        Request
                    </button>
                </div>
            </div>
            <div className="volunteering-container-mobile">
                {isOpen && (
                    <MyFormComponent
                        onRequestClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                )}
                <div className="volunteering-image-container-mobile">
                    <img className="volunteering-image-mobile" src={image} alt="Volunteering" />
                </div>
                <div className="volunteering-content-container-mobile">
                    <h1 className="volunteering-title-mobile">Volunteer Activities</h1>
                    <p className="volunteering-text-mobile">
                        Engages in volunteerism, contributing calligraphy skills and supporting charity initiatives,
                        while fostering community connections.
                        <br />
                        <br />
                        Click the request button if you'd like to invite him to
                        contribute calligraphy to your upcoming events organized for social causes.
                    </p>
                    <button className="btn-test-drive-mobile2" onClick={handleOpen}>
                        Request
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Volunteering;
