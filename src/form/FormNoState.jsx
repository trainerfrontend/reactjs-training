import { useState, useRef } from 'react';

const FormNoState = () => {
    const [userData, setUserData] = useState({});
    const fullNameRef = useRef();
    const emailRef = useRef();


    const submitHandler = () => {


        const fullname = fullNameRef.current.value;

        console.log(fullNameRef)
        const email = emailRef.current.value;

        const formData = { 'fullname': fullname, 'email': email };
        setUserData(formData);
    }

    return (
        <div>
            <h1>{userData && JSON.stringify(userData)}</h1>
            <label>Enter your Name:</label>
            <input type="text" name="fullname" ref={fullNameRef} />

            <label>Enter your email:</label>
            <input type="email" name="email" ref={emailRef} />

            <label>Enter your country:</label>
            <select>
                <option>USA</option>
                <option>UK</option>
                <option>EU</option>
            </select>

            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default FormNoState