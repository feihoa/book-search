const FORM_CHANGE = "FORM_CHANGE";

let initialState = {
    data: {
        bookNameValue: "",
        bookCategoryValue: "all",
        bookSortingValue: "relevance",
    }
}


export function form(state = initialState, action){
    switch(action.type){
        case FORM_CHANGE:
            console.log(action.data)
            console.log("Значения из редьюсера формы")
            return {...state, data:action.data};

            default:
                return state;
    }
    
}

