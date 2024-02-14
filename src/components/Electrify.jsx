import React, { useState } from 'react';
import image from "../images/volunteering.jpg";
import MyFormComponent from './MyFormComponent';

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

    const handleSubmit = (formData) => {
        // Handle form data submission logic here
        console.log('Form Data from Electrify:', formData);
        setShowConfirmation(true);
    };

    return (
        <div>
            <div className="electrify-container">
                {isOpen && (
                    <MyFormComponent
                        onRequestClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                )}
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
                    <button className="btn-test-drive" onClick={handleOpen}>
                        Request
                    </button>
                </div>
            </div>
            <div className="electrify-container-mobile">
                {isOpen && (
                    <MyFormComponent
                        onRequestClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                )}
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
                    <button className="btn-test-drive-mobile2" onClick={handleOpen}>
                        Request
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Electrify;
