import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';


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

    return <div>
        <input
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            placeholder={'Enter title'}
        />


        <span style={{border: '2px solid black'}} onClick={addItem}>
             +
        </span>
        <div>
            {error}
        </div>
    </div>
})
