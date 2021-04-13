import s from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let friendElements = props.friends.map(f =>
        <Friend key={f.id}
                name={f.name}
                imgUrl={f.imgUrl}/>
    );


    return (
        <div className={s.friends}>
            <div className="wrapper">
                <ul className={s.row}>
                    {friendElements}
                </ul>
            </div>
        </div>
    );
}

export default Friends;