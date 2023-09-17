const Button = ({ submitHandler, buttonLabel }) => {
    return <button className="bg-orange-700 text-white p-2 rounded-md hover:bg-orange-300" onClick={submitHandler}>{buttonLabel}</button>
}

export default Button;