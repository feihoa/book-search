export function formChangeBookSearchValue (bookSearchValue){
    return{
        type: "FORM_CHANGE_BOOK_SEARCH_VALUE",
        bookSearchValue
    }
}

export function formChangeBookCategoryValue (bookCategoryValue){
    return{
        type: "FORM_CHANGE_BOOK_CATEGORY_VALUE",
        bookCategoryValue
    }
}

export function formChangeBookSortingValue (bookSortingValue){
    return{
        type: "FORM_CHANGE_BOOK_SORTING_VALUE",
        bookSortingValue
    }
}