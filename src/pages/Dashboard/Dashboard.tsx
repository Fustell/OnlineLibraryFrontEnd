import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { useEffect } from "react";
import {getBooks} from "../../store/books/actionsCreators";
import { Link } from "react-router-dom";

const Dashboard =  () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBooks());
      }, [])
      

    const books = useSelector(
        (state: IRootState) => state.books.booksData.list
    );

    return (<div className="container">
        { books.map((book) => {
          return (
            <div className="card-group col-md-4"  key={book.slug}>
            <div className="card p-3">
            <img className="card-img-top img-fluid" src={`${book.title_photo}`} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.about}</p>
            <Link to={`/book/${book.slug}`}><button type="button" className="btn btn-primary">Читати</button></Link>
            </div>
        </div>
        </div>
          );
        }) }
      </div>);
};

export default Dashboard;