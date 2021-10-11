const SELECTED_CARD = "SELECTED_CARD";


let initialState = {
    card: []
}


export function card(state = initialState, action){
    switch(action.type){
        case SELECTED_CARD:
            return {...state, card:action.card};

            default:
                return state;
    }
    
}
