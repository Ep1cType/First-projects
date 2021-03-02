import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog.jsx";


const Dialogs = (props) => {

    let dialogData = [
        {
            id: 1,
            name: 'Denis Chernykh',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '10hr',
            imgUrl: 'https://d2halst20r4hcy.cloudfront.net/86e/9dbe2/6845/4532/a081/77743830cff1/original/43401.jpg'
        },
        {
            id: 2,
            name: 'Maxim Terekhin',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '5hr',
            imgUrl: 'https://vraki.net/sites/default/files/mood/u.jpg'
        },
        {
            id: 3,
            name: 'Kirill Rumin',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '3hr',
            imgUrl: 'https://i.pinimg.com/736x/d3/e7/a5/d3e7a5f0012814ffa652c1481bc5f7d9.jpg'
        },
        {
            id: 4,
            name: 'Artem Albanov',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '1hr',
            imgUrl: 'https://i.pinimg.com/originals/c4/39/83/c439838dd1596d0f3b219bea3feb9efd.jpg'
        },
        {
            id: 5,
            name: 'Dmitriy Serikov',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '5hr',
            imgUrl: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-21.jpg'
        },
    ]

    let dialogElements = dialogData.map(d =>
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