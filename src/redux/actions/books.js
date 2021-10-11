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
export function booksFetchDataFail(err){

    return {
        type: "BOOKS_FETCH_DATA_FAIL",
        err
    }
}
export function changeIsSearched (val){
    return{
        type: "CHANGE_IS_SEARCHED",
        val
    }
}
export function toggleIsFetching (isFetching) {
    return{
        type: "TOGGLE_IS_FETCHING",
        isFetching
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





export function booksFetchData(url){
    return (dispatch)=>{
        fetch(url)
        .then(res => res.ok ? res : Promise.reject(res))
        .then(res=>res.json())
        .then(books => {
            dispatch(booksFetchDataSuccess(books))
            dispatch(totalBooksFetchDataSuccess(books)) 
            dispatch(booksFetchDataFail(''))   
        })
        .then(()=>dispatch(toggleIsFetching(false)))
        .catch((err) => {
            console.log(err)
            dispatch(booksFetchDataFail(err))
            dispatch(toggleIsFetching(false))
        })
    }

}
