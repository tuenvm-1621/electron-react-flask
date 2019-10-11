import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookAction';

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
  }
}

// const A = ({ fetchBooks, books }) => {
//   useEffect(() => {
//     fetchBooks  ()
//   }, [fetchBooks])
  
//   return(
//     <h1>aaaaaa</h1>
//   )
// }

// export default connect(mapStateToProps, { fetchBooks })(A);
 
export default connect(mapStateToProps, { fetchBooks })((props) => {
  const [currentBooks, setCurrentBooks] = useState([]);
  const {fetchBooks, books} = props;
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])
 
  return(
    <React.Fragment>
      {books && books.map(book => (
        <div>
          <h1>{book.name}</h1>
          <h3>{book.public_date}</h3>
        </div>
      ))}
    </React.Fragment>
  )
})
