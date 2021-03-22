let initialState = {
    friends: [
        {
            id: 1,
            name: 'Denis Chernykh',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '10hr',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg'
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
            message: 'Салам',
            time: '5hr',
            imgUrl: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-21.jpg'
        },
    ],
};

const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;