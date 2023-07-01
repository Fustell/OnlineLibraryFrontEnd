import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api"
import { GettingBooksListFailure, GettingBooksListStart, GettingBooksListSucess } from "./booksReducer"



export const getBooks = () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(GettingBooksListStart())
      const res = await api.books.getBooks()
      dispatch(GettingBooksListSucess(res?.data))
    } catch (e: any) {
      console.error(e)

      dispatch(GettingBooksListFailure(e.message))
    }
  }