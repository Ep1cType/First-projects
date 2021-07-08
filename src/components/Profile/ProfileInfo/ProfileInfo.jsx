import * as React from "react";
import s from "./ProfileInfo.module.css";
import ClickOutside from "./ClickOutside";


// const Status = (props) => {
//
//     const [stat, setStat] = useState(false);
//
//     const activateEdit = () => {
//         return setStat(!stat)
//     }
//
//     const deactivateEdit = () => {
//         return setStat(!stat)
//     }
//
//
//     if (!stat) {
//         return (
//             <div onClick={activateEdit} className={s.status_wrapper}>
//                 <span className={s.page_status}>{props.status}</span>
//             </div>
//         )
//     } else {
//         return (
//             <ClickOutside onClick={deactivateEdit}>
//                 <div className={s.info_editor}>
//                     <input autoFocus={true} value={props.status} className={s.status_input}/>
//                     <button className={s.btn}>Сохранить</button>
//                 </div>
//             </ClickOutside>
//
//         );
//     }
// }

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);

    }

    onStatusChange = (e) => {
        debugger;
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger;

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })

        }

    }


    render() {
        if (!this.state.editMode) {
            return (
                <div onClick={this.activateEditMode} className={s.status_wrapper}>
                    <span className={s.page_status}>{this.props.status || "No status"}</span>
                </div>
            )
        } else {
            return (
                <ClickOutside onClick={this.deactivateEditMode}>
                    <div className={s.info_editor}>
                        <input autoFocus={true} value={this.state.status} className={s.status_input} onChange={this.onStatusChange}/>
                        <button className={s.btn}>Сохранить</button>
                    </div>
                </ClickOutside>

            );
        }
    }
}



const ProfileInfo = (props) => {

    return (
        <div className={s.info}>
            <div className={s.name}>
                <h1 className={s.page_name}>{props.profile.fullName}</h1>
                <ProfileStatus status={props.userStatus} updateStatus={props.updateUserStatus}/>
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