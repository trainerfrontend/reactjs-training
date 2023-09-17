const Input = ({ type, name, handler }) => {
    return <input type={type} name={name} onChange={handler} />
}

export default Input;