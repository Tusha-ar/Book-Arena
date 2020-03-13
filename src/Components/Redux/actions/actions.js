export const ADD_BOOK = 'ADD_BOOK';

function addBook(object){
    return {type: ADD_BOOK, book: object}
}

export default addBook;