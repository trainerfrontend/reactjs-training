import Logo from './Logo';

const Header = () => {
    const heading = {
        color: "orange",
        fontSize: "24px"
    }
    return <header className="header">
        <Logo logoName="facebook" />
        <h2 style={heading} >Welcome</h2>
        <h3 className='text-orange-600 text-4xl'>I am from tailwind</h3>

    </header>
}

export default Header;