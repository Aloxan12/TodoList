import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import './ToDoList.css'
import {Button, IconButton, TextField} from '@material-ui/core';
import {AddBox} from "@material-ui/icons";

export type AddItemFormPropsType = {
    addItem:(title: string)=>void
}

export function AddItemForm (props: AddItemFormPropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)


    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
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

    return (
        <div>
            <TextField variant="outlined"
                       error={!!error}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       label="Title"
                       helperText={error}
            />
            <IconButton color="primary" onClick={addItem}>
                <AddBox />
            </IconButton>
        </div>
    );
}