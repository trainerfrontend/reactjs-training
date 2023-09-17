import styles from './Logo.module.css';

const Logo = (props) => {
    console.log(props); // js object with key and value; props are read-able only
    return <h1 className={styles.logo}>{props.logoName}</ h1>
}

export default Logo;