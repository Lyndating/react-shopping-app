

export const initialState = {
    basket: [],
    user: null,
    address: null,
    products: null,
};

export const subtotalAmount = (basket) =>{
    if (basket) {
        return basket.reduce((amount,item)=> 
            amount +item.price*item.qty, 0);        
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "add_to_basket":
            let existBasket = [...state.basket];
            const productIndex = state.basket.findIndex(item => item.id === action.item.id)
            if (productIndex !== -1) {
                let newItem = action.item;
                let existQty = existBasket[productIndex].qty;
                console.log("existQty",existQty);
                console.log("action.item.qty", action.item.qty);
                newItem.qty = action.item.qty + existQty;
                console.log('new quantity', newItem.qty);
                existBasket.splice(productIndex,1);
                existBasket.push(newItem);
                // TODO: figure out what in this is causing a second run of the function 
                return {
                 ...state, basket: existBasket,
                }
            }else {
                return {
                ...state, basket: [...state.basket, action.item]
                // add new action to existing list of state.
            }
            };
        case "reduce_from_basket":
            console.log(action.item);
            console.log(state.basket);
            const reduceItemIndex = state.basket.findIndex(item=> item.id === action.item.id);
            console.log('reduce function', reduceItemIndex);
            let basketBeforeAction = [...state.basket];
            if (reduceItemIndex !== -1){
                let qtyBeforeAction = basketBeforeAction[reduceItemIndex].qty;
                action.item.qty = qtyBeforeAction-1;
                basketBeforeAction.splice(reduceItemIndex,1);
                if(action.item.qty > 0 ){
                    basketBeforeAction.push(action.item);
                }
                return {
                ...state,basket: basketBeforeAction,
                }
            }else {
                return {
                    ...state, basket: basketBeforeAction,
                }
            }
            
        case "remove_from_basket":
            const index = state.basket.findIndex(item => item.id === action.id);
            let newBasket = [...state.basket];
            if(index !== -1){
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