import React, {FC} from 'react';
import s from './note.module.scss'
import {EditableDiv} from "./EditableDiv";
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
        <div className={s.noteBlock}>
            <span className={s.delButton} onClick={deleteNoteHandler}>del</span>
            <div className={s.title}>{notes.title}</div>
            <EditableDiv value={notes.content} onChange={onChangeContentHandler}/>
        </div>
    )
}

