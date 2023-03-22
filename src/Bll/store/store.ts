import {combineReducers, legacy_createStore} from "redux";
import {InitialStateNotesType, notesReducer} from "../reducers/notesReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {InitialStateTagsType, tagsReducer} from "../reducers/tagsReducer";

const rootReducer = combineReducers({
    notes: notesReducer,
    tags: tagsReducer
})

export const store = legacy_createStore(rootReducer)

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppRootStateType = ReturnType<typeof rootReducer>

export type RootActionsType = InitialStateNotesType | InitialStateTagsType


// @ts-ignore
window.store = store;
