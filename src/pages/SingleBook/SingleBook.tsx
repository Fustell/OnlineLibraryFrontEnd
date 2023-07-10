import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../store";
import { useEffect, useRef, useState } from "react";
import { getSingleBook } from "../../store/SingleBook/actionCreator";
import { useSelector } from "react-redux";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const SingleBook = () => {

    const dispatch = useAppDispatch();
    const { id } = useParams();
    const isNotExecuted = useRef(true);
    const isLoggined = useSelector(
      (state: IRootState) => !!state.auth.authData.access
    )

    useEffect(() => {
        if(isNotExecuted.current && isLoggined){
          isNotExecuted.current = false;
          dispatch(getSingleBook(id));
        }
      }, [dispatch])

      
    const [isReading, setIsReading] = useState(false);
    
    const singleBook = useSelector(
        (state: IRootState) => state.singleBook.bookData
    );

    const startReading = () => {
        setIsReading(true);
    }

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
  
    const onDocumentLoadSuccess = ({numPages}:any) => {
      setNumPages(numPages);
    };
  
    const changePage = (offset:any) => {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    };
  
    const previousPage = () => {
      changePage(-1);
    };
  
    const nextPage = () => {
      changePage(1);
    };
  

    const showingBookPage = () => {
        if(isReading){
            return (  <div>
                <nav>
                  <button onClick={previousPage} disabled={pageNumber <= 1}>
                    Previous
                  </button>
                  <button onClick={nextPage} disabled={pageNumber >= numPages}>
                    Next
                  </button>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </nav>
          
                <div className="pdf-container">
                  <Document
                    file={singleBook.book}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} renderTextLayer={false} />
                  </Document>
                </div>
              </div>)
        }
        else{
            return <div className="container">
            <div className="card-group col-md-4">
                <div className="card p-3">
                <img className="card-img-top img-fluid" src={`${singleBook.title_photo}`} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{singleBook.title}</h5>
                <p className="card-text">{singleBook.about}</p>
                <button className="btn btn-primary" onClick={() => startReading()}>Читати</button>
                </div>
            </div>
            </div>
          </div>
        }
    }


    return showingBookPage();
}

export default SingleBook;