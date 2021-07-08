import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import {Redirect} from "react-router-dom";


const Friends = (props) => {

    let friendElements = props.friends.map(f =>
        <Friend key={f.id}
                name={f.name}
                imgUrl={f.imgUrl}/>
    );

    if (!props.isAuth) {
        return <Redirect to={`/login`}/>
    }


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