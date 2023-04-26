import { createSlice } from "@reduxjs/toolkit";

export type BookType={
    id:string
    title:string,
    author:string,
    description:string,
    isbn:string,
    pageCount:number,
    averageRating:number,
    ratingsCount:number,
    smallThumbnail:string,
    thumbnail:string,
    price:number
}

type InitialState={
    loading:boolean,
    books:BookType[],
    error:string,
    count:number,
}

const initialState : InitialState={
    loading:false,
    books:[],
    error:'',
    count:10,
}

const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        getBooksRequest:(state)=>{
            state.loading=true;
        },
        getBooksSuccess:(state,action)=>{
            state.loading=false;
            state.books=action.payload.slice(0,state.count);
            state.error=''
        },
        getBooksError:(state,action)=>{
            state.loading=false;
            state.books=[];
            state.error=action.payload.error.message || 'Something Went wrong';
        },
        updateBooks:(state)=>{
            state.count=state.count+10;
        },
        reduceBooks:(state) =>{
            state.count=state.count-10;
        }

    },

})

export const {getBooksRequest,getBooksSuccess,getBooksError,updateBooks,reduceBooks}=bookSlice.actions;

export default bookSlice.reducer;
