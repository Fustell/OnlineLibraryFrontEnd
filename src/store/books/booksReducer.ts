import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Book {
        id: number | null,
        publication: string| null,
        category: string| null,
        author: string| null,
        title: string| null,
        title_photo: string| null,
        slug: string| null,
        annotation: string| null,
        about: string| null,
}
export interface BookState {
    booksData:{
        list: Array<Book>
    }
    isLoading: boolean
    error: string | null
}

const initialState: BookState = {
    booksData:{
        list:[]
    },
    isLoading: true,
    error: null
}

export const booksReducer = createSlice({
    name: 'books',
    initialState,
    reducers: {
      GettingBooksListStart: (state): BookState => ({
        ...state,
        isLoading: true,
      }),
      GettingBooksListSucess: (state,action: PayloadAction<Array<Book>>): BookState => ({
        ...state,
        booksData:{
            list: action.payload
        },
        isLoading: false,
        error:  null,
      }),
      GettingBooksListFailure: (state, action: PayloadAction<string>): BookState => ({
        ...state,
        isLoading: false,
        error:  action.payload,
      })
    },
  })

  export const { GettingBooksListFailure,GettingBooksListSucess,GettingBooksListStart ,} = booksReducer.actions
  
  export default booksReducer.reducer