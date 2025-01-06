import type { Deck, FetchDecksResponse } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return { ...state, decks: action.payload }
    default:
      return state
  }
}

// export const getDecksAC = (decks: FetchDecksResponse) => {
//   return { type: 'GET_DECKS' } as const
// }
export const setDecksAC = (decks: Deck[]) => {
  return { type: 'SET_DECKS', payload: decks } as const
}

// type GetDecksActionType = ReturnType<typeof getDecksAC>
type SetDecksActionType = ReturnType<typeof setDecksAC>
type DecksActions = SetDecksActionType
