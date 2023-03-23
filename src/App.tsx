import React from 'react';
import {NotesMain} from "./Ui/notesMain";
import s from './App.module.scss'

function App() {
    return (
        <div className={s.appBlock}>
            <NotesMain/>
        </div>
    );
}

export default App;
