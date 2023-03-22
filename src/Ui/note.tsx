import React, {FC} from 'react';
import style from './note.module.css'
import {EditableSpan} from "./EditableSpan";
import {useDispatch} from "react-redux";
import {changeNoteContent, deleteNote} from "../Bll/reducer/notesReducer";

type NoteType = {
    id: string
    title: string
    content: string
}

type NotePropsType = {
    notes: NoteType
}
const Note: FC<NotePropsType> = ({notes}) => {

    const dispatch = useDispatch()

    const onChangeContentHandler = (newValue: string) => dispatch(changeNoteContent(notes.id, newValue))

    const deleteNoteHandler = () => dispatch(deleteNote(notes.id))

    return (
        <div className={style.noteBlock}>
            <span onClick={deleteNoteHandler}>del</span>
            <h3 className={style.title}>{notes.title}</h3>
            <EditableSpan value={notes.content} onChange={onChangeContentHandler}/>
        </div>
    );
};

export default Note;