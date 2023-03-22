import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../Bll/store/store";
import Note from "./note";
import {AddNoteForm} from "./addNote";
import {useDispatch} from "react-redux";
import {setNote, setNoteTitle} from "../Bll/reducers/notesReducer";
import {v1} from "uuid";

export const NotesMain = () => {
    const notes = useAppSelector(state => state.notes)
    const tags = useAppSelector(state => state.tags)
    const dispatch = useDispatch()

    const [activeTag, setActiveTag] = useState('')

    // useEffect(() => {
    //     const tags = notes.filter(n => n.content.includes('#'))
    //     tags.forEach(t => {
    //         console.log(t.content)
    //         dispatch(setTag(t.content))
    //     })
    // }, [notes])

    useEffect(() => {
        const newArray = notes.filter(n => n.content.includes(activeTag))
        dispatch(setNote(newArray[0]))
    }, [activeTag])

    const addNoteHandler = (newTitle: string) => {
        dispatch(setNoteTitle(v1(), newTitle))
    }

    return (
        <div>

            <AddNoteForm addItemCallBack={addNoteHandler}/>
            {notes.map(el => <Note key={el.id} notes={el}/>)}
            {tags.map((el, index) => <span onClick={() => {
                setActiveTag(el)
            }} key={index}>{el}</span>)}
        </div>
    );
};

