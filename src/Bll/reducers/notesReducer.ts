const initialState = [
    {id: '1', title: 'First note 1', content: 'Hello world!'},
    {id: '2', title: 'First note 2', content: '#world'},
    {id: '3', title: 'First note 3', content: 'Hello wor#ld'},
    {id: '4', title: 'First note 4', content: 'Hello#123123'},
    {id: '5', title: 'First note 5', content: 'Hello 123123'},
]

export const notesReducer = (state: InitialStateNotesType = initialState, action: NotesActionsType) => {
    switch (action.type) {
        case "NOTES/SET-NOTE-TITLE":
            return [...state, {
                id: action.payload.id,
                title: action.payload.newTitle,
                content: 'Click me for change text'
            }]
        case "NOTES/SET-NOTE-CONTENT":
            return state.map(el => el.id === action.payload.id ? {...el, content: action.payload.newContent} : el)
        case "NOTES/DELETE-NOTE":
            return state.filter(el => el.id !== action.payload.id)
        case "NOTES/SET-NOTE":
            return state.filter(el => el.id !== action.payload.note.id)
        default:
            return state
    }
}

export const setNoteTitle = (id: string, newTitle: string) => ({
    type: 'NOTES/SET-NOTE-TITLE',
    payload: {id, newTitle}
} as const)

export const changeNoteContent = (id: string, newContent: string) => ({
    type: 'NOTES/SET-NOTE-CONTENT',
    payload: {id, newContent}
} as const)

export const deleteNote = (id: string) => ({
    type: 'NOTES/DELETE-NOTE',
    payload: {id}
} as const)
export const setNote = (note: any) => ({
    type: 'NOTES/SET-NOTE',
    payload: {note}
} as const)

export type InitialStateNotesType = typeof initialState

export type NotesActionsType =
    ReturnType<typeof setNoteTitle>
    | ReturnType<typeof changeNoteContent>
    | ReturnType<typeof deleteNote>
    | ReturnType<typeof setNote>
