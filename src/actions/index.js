// import { connect } from 'react-redux';

export function selectBook(book) {
  // console.log('A book has been slected:', book.title)
  //selectBook is an ActionCreator, it needs to return an action, an object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
