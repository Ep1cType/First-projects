import * as React from "react";
import s from "./ProfileInfo.module.css";
import Loader from "../../Users/Loader";

const ProfileInfo = (props) => {



    return (
        <div className={s.info}>
            <div className={s.name}>
                <h1 className={s.page_name}>{props.profile.fullName}</h1>
            </div>
            <ul className={s.desc}>
                <li className={s.row}>
                    <div className={s.title}>
                        Date of Birth:
                    </div>
                    <div className={s.text}>
                        10 July
                    </div>
                </li>
                <li className={s.row}>
                    <div className={s.title}>
                        City:
                    </div>
                    <div className={s.text}>
                        Krasnoyarsk
                    </div>
                </li>
                <li className={s.row}>
                    <div className={s.title}>
                        Education:
                    </div>
                    <div className={s.text}>
                        SibSau'21
                    </div>
                </li>
                <li className={s.row}>
                    <div className={s.title}>
                        Website:
                    </div>
                    <div className={s.text}>
                        Lorem, ipsum dolor.
                    </div>
                </li>
                <li className={s.row}>
                    <div className={s.title}>
                        Languages:
                    </div>
                    <div className={s.text}>
                        Russian, English
                    </div>
                </li>
                <li className={s.row}>
                    <div className={s.title}>
                        {props.profile.contacts.github ? <span>github:</span> : null}
                    </div>
                    <div className={s.text}>
                        {props.profile.contacts.github}
                    </div>
                </li>
                <li className={s.row}>
                    <div className={s.title}>
                        {props.profile.contacts.twitter ? <span>twitter:</span> : null}
                    </div>
                    <div className={s.text}>
                        {props.profile.contacts.twitter}
                    </div>
                </li>
                {props.profile.contacts.website === null ? null : <li className={s.row}>
                    <div className={s.title}>
                        website:
                    </div>
                    <div className={s.text}>
                        {props.profile.contacts.website}
                    </div>
                </li> }
            </ul>
        </div>
    );
}

export default ProfileInfo;