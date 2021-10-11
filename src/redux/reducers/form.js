const FORM_CHANGE_BOOK_SEARCH_VALUE = "FORM_CHANGE_BOOK_SEARCH_VALUE";
const FORM_CHANGE_BOOK_CATEGORY_VALUE = "FORM_CHANGE_BOOK_CATEGORY_VALUE";
const FORM_CHANGE_BOOK_SORTING_VALUE = "FORM_CHANGE_BOOK_SORTING_VALUE";

let initialState = {
    bookSearchValue: "",
    bookCategoryValue: "all",
    bookSortingValue: "relevance",
}


export function form(state = initialState, action){
    switch(action.type){
        case FORM_CHANGE_BOOK_SEARCH_VALUE:
            return {...state, bookSearchValue:action.bookSearchValue};
        case FORM_CHANGE_BOOK_CATEGORY_VALUE:
            return {...state, bookCategoryValue:action.bookCategoryValue};
        case FORM_CHANGE_BOOK_SORTING_VALUE:
            return {...state, bookSortingValue:action.bookSortingValue};

            default:
                return state;
    }
    
}

