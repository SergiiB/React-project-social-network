import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 20, dislike: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 15, dislike: 1}
            ],
            newPostText: 'React'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Sergei'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Vera'},
                {id: 5, name: 'Lara'},
                {id: 6, name: 'Olga'},
                {id: 7, name: 'Andrew'},
                {id: 8, name: 'Misha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.state = store;

// store - OOP
