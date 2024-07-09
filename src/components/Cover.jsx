import React, { useState } from 'react';
import cover from "../images/Cover-desktop.jpg";
import mobile from "../images/cover_mobile.jpeg";
import MyFormComponent from './MyFormComponent';

function Cover() {
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
        console.log('Form Data from Cover:', formData);
        setShowConfirmation(true);
    };

    return (
        
        <div>
            <div className='cover-mobile'>
                {isOpen && (
                    <MyFormComponent
                        onRequestClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                )}
                <img className="mobile-image" src={mobile} alt="Logo" />
                <div className="mobile-cover-content">
                    <h1 className="mobile-cover-title">Full-Stack Software Developer</h1>
                    <p className="mobile-cover-text">
                        Completed an intensive one-year training program,
                        gaining practical experience in JavaScript, React.js, HTML, CSS, Java, PostgreSQL, Node.js, and AWS Cloud Computing.
                    </p>
                    <button className="btn-test-drive-mobile" onClick={handleOpen}>
                        Request Information
                    </button>
                </div>
            </div>
            <div className="cover-container">
                <div className="image-container">
                <img className="cover-image" src={cover} alt="Logo" />
                <div className="cover-content">
                    <h3 className="cover-title">Full-Stack Software Developer</h3>
                    <p className="cover-text">
                        Completed an intensive one-year training program,
                        gaining practical experience in JavaScript, React.js, HTML, CSS, Java, PostgreSQL, Node.js, and AWS Cloud Computing.
                    </p>
                    <button className="btn-test-drive" onClick={handleOpen}>
                        Request Information
                    </button>
                    <div>
                {isOpen && (
                        <MyFormComponent
                            onRequestClose={handleClose}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
    
}

export default Cover;
