import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <img
                        src="https://w7.pngwing.com/pngs/705/894/png-transparent-fila-logo-fila-t-shirt-shoe-sneakers-adidas-fila-logo-blue-text-trademark.png"
                        alt=""/>
                </div>
            </div>
        </header>
    );
}

export default Header;