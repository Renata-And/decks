import { decksApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'
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