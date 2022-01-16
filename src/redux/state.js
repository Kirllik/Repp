let store = {
    _rerenderEntireTree() {
        console.log('State changed');
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            /*newPostText: 'it-kamasutra.com'*/
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
    },

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    getState() {
        return this._state;
    },

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    subscribe(observer) {    /*импортируемая Функция перерисовки дома, для её вызова в index.Js*/
        this._rerenderEntireTree = observer;  // observer
    }
}