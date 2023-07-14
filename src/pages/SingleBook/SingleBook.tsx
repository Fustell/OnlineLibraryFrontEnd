import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../store";
import { useEffect, useRef, useState } from "react";
import { getSingleBook } from "../../store/SingleBook/actionCreator";
import { useSelector } from "react-redux";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Loading from "../../components/Loading";
import './SingleBook.scss'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.js',
     import.meta.url,
   ).toString();


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

    const isLoadingSingleBook = useSelector(
      (state: IRootState) => state.singleBook.isLoading
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
            return (  <div className="container-lg">
                <div className="row">
                  <div className="pdf-container">
                    <Document className="pdf-viewer"
                      file={singleBook.book}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      <Page pageNumber={pageNumber} renderTextLayer={false} />
                    </Document>
                  </div>
                </div>
                <div className="row">
                <div className="toolbar">
                    <button onClick={previousPage} disabled={pageNumber <= 1} className="btn btn-primary mt-2 mb-2">
                      Previous
                    </button>
                    <span className="toolbar-elements">
                          Page {pageNumber} of {numPages}
                      </span>
                    <button onClick={nextPage} disabled={pageNumber >= numPages} className="btn btn-primary toolbar-elements">
                      Next
                    </button>
                  </div>
              </div>
              </div>)
        }
        else{
            return <div className="container-lg">
            <section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">
            <img style={{maxWidth: "100%", maxHeight: "100vh", margin: "auto" }} className="rounded-4 fit" src={`${singleBook.title_photo}`}/>
          </a>
        </div>
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-light">
            {singleBook.title}
          </h4>

          <div className="row">
            <dt className="col-3">Категорія:</dt>
            <dd className="col-9">{singleBook.category}</dd>

            <dt className="col-3">Автор</dt>
            <dd className="col-9">{singleBook.author}</dd>

            <dt className="col-3">Видавництво</dt>
            <dd className="col-9">{singleBook.publication}</dd>

            <dt className="col-3">Рік публікації</dt>
            <dd className="col-9">{singleBook.year_release}</dd>

            <dt className="col-3">Анотації</dt>
            <dd className="col-9">{singleBook.annotation}</dd>



            <dt className="col-3">Опис</dt>
            <dd className="col-9">{singleBook.about}</dd>
          </div>

          <hr />

          <a href="#" className="btn btn-primary shadow-0" onClick={() => startReading()}> Читати </a>
        </div>
      </main>
    </div>
  </div>
</section>
          </div>
        }
    }


    if(isLoadingSingleBook){
      return <Loading/>
    }
    else{
      return showingBookPage();

    }
}

export default SingleBook;