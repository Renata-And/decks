import type { Deck } from './decks-api.ts'

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
    case 'ADD_DECK':
      return { ...state, decks: [{ ...action.payload, isFavorite: false }, ...state.decks] }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => {
  return { type: 'SET_DECKS', payload: decks } as const
}

export const addDeckAC = (deck: Deck) => {
  return { type: 'ADD_DECK', payload: deck } as const
}

type SetDecksActionType = ReturnType<typeof setDecksAC>
type AddDeckActionType = ReturnType<typeof addDeckAC>
type DecksActions = SetDecksActionType | AddDeckActionType
