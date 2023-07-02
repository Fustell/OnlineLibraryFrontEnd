import { PayloadAction, createSlice } from "@reduxjs/toolkit"

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
    book: string| null,
}
export interface SingleBookState {
    bookData:Book
isLoading: boolean
error: string | null
}

const initialState: SingleBookState = {
    bookData:{
    id: null,
    publication: null,
    category: null,
    author: null,
    title: null,
    title_photo: null,
    slug: null,
    annotation:  null,
    about:  null,
    book: null,
},
isLoading: true,
error: null
}

export const SinglebooksReducer = createSlice({
    name: 'singleBook',
    initialState,
    reducers: {
      GettingSingleBooktStart: (state): SingleBookState => ({
        ...state,
        isLoading: true,
      }),
      GettingSingleBookSucess: (state,action: PayloadAction<Book>): SingleBookState => ({
        ...state,
        bookData:action.payload,
        isLoading: false,
        error:  null,
      }),
      GettingSingleBookFailure: (state, action: PayloadAction<string>): SingleBookState => ({
        ...state,
        isLoading: false,
        error:  action.payload,
      })
    },
  })

  export const { GettingSingleBooktStart,GettingSingleBookSucess,GettingSingleBookFailure} = SinglebooksReducer.actions
  
  export default SinglebooksReducer.reducer
