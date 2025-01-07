import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import type { Dispatch } from 'redux'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksApi
    .getDesks()
    .then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const addDeckTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  return decksApi.addDeck(params).then(res => {
    dispatch(addDeckAC(res.data))
  })
}