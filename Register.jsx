import React, { useState } from 'react';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        // Call register API here
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
