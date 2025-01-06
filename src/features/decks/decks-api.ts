import axios from 'axios'
import type { decksReducer } from './decks-reducer.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDesks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  }
}

export type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type Author = {
  id: string
  name: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}