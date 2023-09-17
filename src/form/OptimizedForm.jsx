import { useState } from 'react';
import Label from '../components/common/Label';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const OptimizedForm = () => {
    const [userData, setUserData] = useState({});

    const changeHandler = (e) => {
        const { value, name } = e.target; // JS 

        setUserData((prevState) => ({
            ...prevState, [name]: value
        }))
    }
    return (
        <div>
            <h1>{userData && JSON.stringify(userData)}</h1>
            <Label labelName="Enter your name" />
            <Input type="text" name="fullname" handler={changeHandler} />

            <Label labelName="Enter your email" />
            <Input type="email" name="email" handler={changeHandler} />

            <Label labelName="select your country:" />
            <select>
                <option>USA</option>
                <option>UK</option>
                <option>EU</option>
            </select>

            <Button buttonLabel="Submit" />
        </div>
    )
}

export default OptimizedForm