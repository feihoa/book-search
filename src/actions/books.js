export function booksFetchDataSuccess(books){

    return {
        type: "BOOKS_FETCH_DATA_SUCCESS",
        books
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
        .catch((err) => {
            console.log(err); 
        })
    }

}