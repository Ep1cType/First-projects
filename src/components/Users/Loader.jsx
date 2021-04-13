import * as React from "react";
import s from "./Loader.module.css"



const Loader = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;