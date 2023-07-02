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

export interface IBooksResponse {
    list: Array<Book>

}