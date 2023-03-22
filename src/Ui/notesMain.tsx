import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../Bll/store/store";
import Note from "./note";
import {AddNoteForm} from "./addNote";
import {useDispatch} from "react-redux";
import {setNote, setNoteTitle} from "../Bll/reducers/notesReducer";
import {v1} from "uuid";
import {setTag} from "../Bll/reducers/tagsReducer";

export const NotesMain = () => {
    const notes = useAppSelector(state => state.notes)
    const tags = useAppSelector(state => state.tags)
    const dispatch = useDispatch()

    const [activeTag, setActiveTag] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const searchParam = () => {
        if (notes.find(el => {
            el.content.includes(searchValue)
        })) {
        }
    }

    useEffect(() => {
        const tags = notes.filter((n, index) => n.content.includes('#'))
        tags.forEach((t) => {
            dispatch(setTag(t.content))
        })
    }, [notes])

    const fakeActiveTag = '#12'
    useEffect(() => {
        const newArray = notes.filter((n, index) => n.content.includes(activeTag))
        console.log(newArray[0])
        dispatch(setNote(newArray[0]))
    }, [activeTag])

    const addNoteHandler = (newTitle: string) => {
        dispatch(setNoteTitle(v1(), newTitle))
    }

    return (
        <div>
            <input onChange={(e) => {
                setSearchValue(e.currentTarget.value)
            }}/>
            <button onClick={searchParam}>search</button>

            <AddNoteForm addItemCallBack={addNoteHandler}/>
            {notes.map(el => <Note key={el.id} notes={el}/>)}
            {tags.map((el, index) => <span onClick={() => {
                setActiveTag(el)
            }} key={index}>{el}</span>)}
        </div>
    );
};

