import Book from "./Book";
import './DisplayBooks.css'
import {useEffect,Fragment} from 'react';
import { resetTitle } from "../title/titleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getBooksRequest,updateBooks,reduceBooks } from "./bookSlice";


function DisplayBooks(props:object){
    const dispatch=useAppDispatch();

    const books=useAppSelector(state=>state.book);

    useEffect(()=>{
        dispatch(getBooksRequest());
    },[dispatch]);

    console.log("Books are",books);
    

    dispatch(resetTitle());
    
    return <Fragment>
        <div className="books">
        {books.loading && <h1>Loading Books...</h1>}
        {!books.loading && books.error ?  <h1>Error : {books.error}</h1>:null}
        {!books.loading && books.books.length ?
            books.books.map(function(item:any,index:number){
                return <Book key={item.id} item={item}/>
            })
            :null
        }
    </div>
    <div className="show-more-wrapper">
    <button className="show-more" onClick={()=>{
            let text=document.getElementsByClassName("show-more")[0].innerHTML;
            if(text===("Show More")){
                document.getElementsByClassName("show-more")[0].innerHTML="Show Less";
                dispatch(updateBooks());
                dispatch(getBooksRequest());
            }
            else{
                document.getElementsByClassName("show-more")[0].innerHTML="Show More";
                dispatch(reduceBooks());
                dispatch(getBooksRequest());
            }
            
        }}>Show More
    </button>
    </div>
    
    </Fragment>
    
}

export default DisplayBooks;