import React, {ChangeEvent, FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {setTag} from "../Bll/reducers/tagsReducer";
import s from './editableDiv.module.scss'

type EditableDivPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableDiv: FC<EditableDivPropsType> = React.memo(({value, onChange}) => {

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(value)
    }

    const activateViewMode = () => {
        setEditMode(false)
        onChange(title)
        let val = title.split(/(#[a-z\d-]+)/ig);
        for (let i = 0; i < val.length; i++) {
            if (val[i].charAt(0) === "#") {
                setTitle(val[i])
                dispatch(setTag(val[i]))
            }
        }
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <textarea className={s.input} value={title} onChange={handleChange} autoFocus onBlur={activateViewMode}/>
        : <div className={s.content} onClick={activateEditMode}>{value}</div>
})
