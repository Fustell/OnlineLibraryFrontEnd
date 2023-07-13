import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { useEffect, useRef } from "react";
import {getBooks} from "../../store/books/actionsCreators";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import './Dashboard.scss';

const Dashboard =  () => {

    const dispatch = useAppDispatch();
    const isNotExecuted = useRef(true);

    useEffect(() => {
        if(isNotExecuted.current){
          isNotExecuted.current = false;
          dispatch(getBooks());
        }
      }, [dispatch])
      

    const books = useSelector(
        (state: IRootState) => state.books.booksData.list
    );


    const isLoadingBooks = useSelector(
      (state: IRootState) => state.books.isLoading
  );

      if(isLoadingBooks && books.length == 0){
        return <Loading/>
      }
      else{
    return (<div className="container-lg">
      <div className="row row-cols-6 g-3 books-rows">
        {books && books.map((book) => {
        return (
          <div className="col" key={book.slug}>
          <div className="card">
            <img src={`${book.title_photo}`} className="card-img-top" alt={`${book.title_photo}`} />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                {book.about}
              </p>
              <Link to={`/book/${book.slug}`}><button type="button" className="btn btn-primary">Читати</button></Link>
            </div>
          </div>
        </div>
        );
        })}
  </div>
    </div>);
      }
};

export default Dashboard;