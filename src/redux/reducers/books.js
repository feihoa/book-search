const BOOKS_FETCH_DATA_SUCCESS = "BOOKS_FETCH_DATA_SUCCESS";
const TOTAL_BOOKS_FETCH_DATA_SUCCESS = "TOTAL_BOOKS_FETCH_DATA_SUCCESS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const CHANGE_IS_SEARCHED = "CHANGE_IS_SEARCHED";
const NEXT_PAGE = "NEXT_PAGE";
const RESET = "RESET";

let initialState = {
    books:[],
    index:0,
    totalBooks: -1,
    isFetching: false,
    isSearched:false,
}

export function books(state = initialState, action){
    switch(action.type){
        case TOTAL_BOOKS_FETCH_DATA_SUCCESS:
            return {...state, totalBooks:action.totalBooksItems};
        case BOOKS_FETCH_DATA_SUCCESS:
            return {...state, books:[...state.books.concat(action.books)]}; 
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case CHANGE_IS_SEARCHED: 
            return {...state, isSearched: action.val};
        case NEXT_PAGE: 
            return {...state, index:state.index+=30};
        case RESET: 
            return initialState
            default:
                return state;
    }
    
}

