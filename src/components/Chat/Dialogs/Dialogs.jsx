import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog.jsx";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d =>
        <Dialog id={d.id}
                name={d.name}
                message={d.message}
                time={d.time}
                imgUrl={d.imgUrl}/>
    );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrapper}>
                <ul className={s.dialogs__row}>
                    {dialogElements}
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;