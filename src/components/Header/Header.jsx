import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <a href='/'>
                        <img
                            src={require("../../icons/logo.svg").default}
                            alt=""/>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;