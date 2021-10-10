export function booksFetchDataSuccess(books){
    return {
        type: "BOOKS_FETCH_DATA_SUCCESS",
        books: books.items
    }
}
export function totalBooksFetchDataSuccess(books){

    return {
        type: "TOTAL_BOOKS_FETCH_DATA_SUCCESS",
        totalBooksItems: books.totalItems
    }
}
export function incrementPageIndex(){

    return {
        type: "NEXT_PAGE",
    }
}
export function resetState(){

    return {
        type: "RESET",
    }
}

export function toggleIsFetching (isFetching) {
    return{
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }

}
export function changeIsSearched (val){
    return{
        type: "CHANGE_IS_SEARCHED",
        val
    }
}


export function booksFetchData(url){
    return (dispatch)=>{
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res.json();
        })
        .then(books => (
            dispatch(booksFetchDataSuccess(books)),
            dispatch(totalBooksFetchDataSuccess(books))     
            ))
        .then(()=>dispatch(toggleIsFetching(false)))
        .catch((err) => {
            console.log(err); 
        })
    }

}
