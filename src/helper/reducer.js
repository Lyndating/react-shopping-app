
export const initialState = {
    basket: [],
    user: null,
    address: null,
    products: null,
};

export const subtotalAmount = (basket) =>{
    if (basket) {
        return basket.reduce((amount,item)=> amount +item.price, 0);
        
    }
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "add_to_basket":
            return {
                ...state, basket: [...state.basket, action.item],
                // add new action to existing list of state.
            };
        case "remove_from_basket":
            const index = state.basket.findIndex(item => item.id === action.id);
            let newBasket = [...state.basket];
            if(index != -1){
                newBasket.splice(index,1);
            }
            return {
                ...state, basket: newBasket,
            };
        case "empty_basket":
            return {
                ...state,
                basket:[],
            };
        
        case "set_user":
            return {
                ...state, user: action.user
            }
        case "add_address":
            let a = {...state, address: action.item}
            return a
        case "add_products":
            return {
                ...state, products: action.products
            }
        default:
            return state;
    }
};

export default reducer;