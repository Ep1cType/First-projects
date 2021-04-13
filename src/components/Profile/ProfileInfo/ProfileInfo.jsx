import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.info}>
            <div className={s.name}>
                <h1 className={s.page_name}>Denis Chernykh</h1>
            </div>
            <div className={s.desc}>
                <div className={s.row}>
                    <div className={s.title}>
                        Date of Birth:
                    </div>
                    <div className={s.text}>
                        10 July
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.title}>
                        City:
                    </div>
                    <div className={s.text}>
                        Krasnoyarsk
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.title}>
                        Education:
                    </div>
                    <div className={s.text}>
                        SibSau'21
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.title}>
                        Website:
                    </div>
                    <div className={s.text}>
                        Lorem, ipsum dolor.
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.title}>
                        Languages:
                    </div>
                    <div className={s.text}>
                        Russian, English
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;