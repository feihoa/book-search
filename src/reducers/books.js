

let initialState = {
    books:[],
    isFetching: false,
    isSearched:false
}


export function books(state = initialState, action){
    switch(action.type){
        case "BOOKS_FETCH_DATA_SUCCESS":
            return {...state, books:action.books};
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching};
        case "CHANGE_IS_SEARCHED": 
            return {...state, isSearched: action.val};
            
            default:
                return state;
    }
    
}