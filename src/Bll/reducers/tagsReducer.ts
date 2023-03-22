const initialState = [] as string[]

export const tagsReducer = (state: InitialStateTagsType = initialState, action: TagsActionsType) => {
    switch (action.type) {
        case "TAGS/SET-TAG":
            return [...state, action.payload.newTag]
        default:
            return state
    }
}

export const setTag = (newTag: string) => ({
    type: 'TAGS/SET-TAG',
    payload: {newTag}
} as const)

export type InitialStateTagsType = typeof initialState

export type TagsActionsType =
    ReturnType<typeof setTag>
