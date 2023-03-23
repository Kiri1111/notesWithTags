import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import s from './addNote.module.scss'

type AddItemFormPropsType = {
    addItemCallBack: (title: string) => void
}

export const AddNoteForm: FC<AddItemFormPropsType> = React.memo(({addItemCallBack}) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            addItemCallBack(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div className={s.addBlock}>
        <input
            className={s.input}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            placeholder={'Enter title'}
        />

        <span className={s.button} onClick={addItem}>
             add
        </span>
        <div>
            {error}
        </div>
    </div>
})
