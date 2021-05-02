import * as React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog.jsx";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d =>
        <Dialog key={d.id}
                id={d.id}
                name={d.name}
                message={d.message}
                time={d.time}
                read={d.read}
                readit={props.readDialog}
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