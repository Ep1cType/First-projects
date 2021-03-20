const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// В данную функцию приходит state. Так как функция отвечает за profile, значит в state
// придёт profilePage. Значит избавляемся от конструкции this._state.profilePage
// callSubscriber больше не вызывается, так как это не наша ответственность. Мы лишь
// преобразовываем state.

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                imgUrl: 'https://sun9-5.userapi.com/c855428/v855428486/1e0c0e/s0jovjqBdEc.jpg',
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export default profileReducer;