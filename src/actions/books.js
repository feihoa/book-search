export function booksFetchDataSuccess(books){

    return {
        type: "BOOKS_FETCH_DATA_SUCCESS",
        books
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
        .then(books => dispatch(booksFetchDataSuccess(books)))
        .then(()=>dispatch(toggleIsFetching(false)))
        .catch((err) => {
            console.log(err); 
        })
    }

}