import React, {FC} from 'react';
import style from './note.module.css'
import {EditableSpan} from "./EditableSpan";
import {useDispatch} from "react-redux";
import {changeNoteContent, deleteNote, NoteType} from "../Bll/reducers/notesReducer";


type NotePropsType = {
    notes: NoteType
}
export const Note: FC<NotePropsType> = ({notes}) => {

    const dispatch = useDispatch()

    const onChangeContentHandler = (newValue: string) => dispatch(changeNoteContent(notes.id, newValue))

    const deleteNoteHandler = () => dispatch(deleteNote(notes.id))

    return (
        <div className={style.noteBlock}>
            <span onClick={deleteNoteHandler}>del</span>
            <h3 className={style.title}>{notes.title}</h3>
            <EditableSpan value={notes.content} onChange={onChangeContentHandler}/>
        </div>
    )
}

