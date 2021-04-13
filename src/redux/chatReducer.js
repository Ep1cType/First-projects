const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const READ = 'READ'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Denis Chernykh',
            read: true,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '10hr',
            imgUrl: 'https://avatarfiles.alphacoders.com/277/277372.jpg'
        },
        {
            id: 2,
            name: 'Maxim Terekhin',
            read: true,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '5hr',
            imgUrl: 'https://vraki.net/sites/default/files/mood/u.jpg'
        },
        {
            id: 3,
            name: 'Kirill Rumin',
            read: false,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '3hr',
            imgUrl: 'https://i.pinimg.com/736x/d3/e7/a5/d3e7a5f0012814ffa652c1481bc5f7d9.jpg'
        },
        {
            id: 4,
            name: 'Artem Albanov',
            read: false,
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
            time: '1hr',
            imgUrl: 'https://i.pinimg.com/originals/c4/39/83/c439838dd1596d0f3b219bea3feb9efd.jpg'
        },
        {
            id: 5,
            name: 'Dmitriy Serikov',
            read: true,
            message: 'Салам',
            time: '5hr',
            imgUrl: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-21.jpg'
        },
    ],
    messages: [
        {
            firstname: 'Denis',
            imgUrl: 'https://avatarfiles.alphacoders.com/277/277372.jpg',
            message: 'lorem fadf sdf sda fsadg sgd ags gsa g',
        },
        {
            firstname: 'Danil',
            imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg',
            message: 'bcxgbxcghdsghsfghdfghfdhgfg',
        },
        {
            firstname: 'Denis',
            imgUrl: 'https://avatarfiles.alphacoders.com/277/277372.jpg',
            message: 'cvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        },
        {
            firstname: 'Denis',
            imgUrl: 'https://avatarfiles.alphacoders.com/277/277372.jpg',
            message: 'fffffffffffffffffffffffffffffffffffff',
        },
    ],
    newMessageText: '',
};

export const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                firstname: 'Denis',
                imgUrl: 'https://avatarfiles.alphacoders.com/277/277372.jpg',
                message: state.newMessageText,
            };
            return  {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',

            };
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText: action.newText,
            };
        }
debugger;
        case READ: {
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id === action.dialogID) {
                        return {...dialog, read: false}
                    }
                    return dialog;
                })
            }
        }

        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    };

}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    };
}

export const readActionCreator = (dialogID) => {
    return {
        type: READ, dialogID,
    };
};


export default chatReducer;

