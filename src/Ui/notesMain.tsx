import React from 'react';
import {useAppSelector} from "../Bll/store/store";
import Note from "./note";
import {AddNoteForm} from "./addNote";
import {useDispatch} from "react-redux";
import {setNoteTitle} from "../Bll/reducers/notesReducer";
import {v1} from "uuid";

export const NotesMain = () => {
    const notes = useAppSelector(state => state.notes)
    const tags = useAppSelector(state => state.tags)
    const dispatch = useDispatch()

    const addNoteHandler = (newTitle: string) => {
        dispatch(setNoteTitle(v1(), newTitle))
    }


    return (
        <div>
            <AddNoteForm addItemCallBack={addNoteHandler}/>
            {notes.map(el => <Note key={el.id} notes={el}/>)}
            {tags.map((el, index) => <span key={index}>{el}</span>)}
        </div>
    );
};

