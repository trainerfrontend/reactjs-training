import { useState } from 'react';
import Heading from '../components/common/Heading'

const Form = () => {
    const [userData, setUserData] = useState({}); // { fullname: "tom", email: "tom@we.com"}
    //const [email, setEmail] = useState("guest@we.com"); // state
    const clickHandler = (e) => {
        console.log("click")
    }
    const changeHandler = (e) => {
        const { name, value } = e.target;
        // setUserData(value)
        setUserData((prevState) => ({
            ...prevState, [name]: value
        }))
    }
    return (
        <div>
            <h1>{userData && JSON.stringify(userData)}</h1>
            <label>Enter your Name:</label>
            <input type="text" name="fullname" onChange={changeHandler} />

            <label>Enter your email:</label>
            <input type="email" name="email" onChange={changeHandler} />

            <label>Enter your country:</label>
            <select>
                <option>USA</option>
                <option>UK</option>
                <option>EU</option>
            </select>

            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Form