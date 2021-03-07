import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <li className={s.item}>
            <a href="#" className={s.img__url}>
                <img src={props.imgUrl} alt=""/>
            </a>
            <div className={s.text}>
                <h3>{props.name}</h3>
                <div className="fa">
                    <span className={s.separator}>Write message</span>
                </div>
            </div>
        </li>
    );
}

export default Friend;