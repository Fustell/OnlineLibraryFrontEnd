import { Dispatch } from "react";
import { GettingBooksListFailure } from "../books/booksReducer";
import { GettingSingleBookSucess, GettingSingleBooktStart } from "./SingleBookReducer";
import api from "../../api";


export const getSingleBook = (id:string | undefined) =>
async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    dispatch(GettingSingleBooktStart())
    const res = await api.books.getSingleBook(id);
    dispatch(GettingSingleBookSucess(res?.data))
  } catch (e: any) {
    console.error(e)

    dispatch(GettingBooksListFailure(e.message))
  }
}



export default getSingleBook;
