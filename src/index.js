import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: "Hi, wassup?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: "lol", likesCount: 1},
    {id: 4, message: "wow", likesCount: 3},
    {id: 5, message: "Hehe", likesCount: 45},
    {id: 6, message: ":)", likesCount: 24}
]

let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Gonzaleoz"},
    {id: 3, name: "Parovoz"},
    {id: 4, name: "Teremok"},
    {id: 5, name: "Jazzep"},
    {id: 6, name: "Mullermilch"}
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Wassup"},
    {id: 3, message: "Hello"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
