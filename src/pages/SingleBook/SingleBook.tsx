import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../store";
import { useEffect } from "react";
import { getSingleBook } from "../../store/SingleBook/actionCreator";
import { useSelector } from "react-redux";
const SingleBook = () => {

    const dispatch = useAppDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getSingleBook(id));
      }, [dispatch])
    
    const singleBook = useSelector(
        (state: IRootState) => state.singleBook.bookData
    );


    return (<div className="container">
        <div className="card-group col-md-4">
            <div className="card p-3">
            <img className="card-img-top img-fluid" src={`${singleBook.title_photo}`} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{singleBook.title}</h5>
            <p className="card-text">{singleBook.about}</p>
            </div>
        </div>
        </div>
      </div>);
}

export default SingleBook;