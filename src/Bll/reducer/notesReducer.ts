const initialState = [
    {id: '1', title: 'First note', content: 'Hello world!'}
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

export type InitialStateNotesType = typeof initialState

export type NotesActionsType =
    ReturnType<typeof setNoteTitle>
    | ReturnType<typeof changeNoteContent>
    | ReturnType<typeof deleteNote>
