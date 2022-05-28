let localBasket = JSON.parse(localStorage.localBasket ||"[]");
localStorage.setItem("localBasket", JSON.stringify(localBasket));
export const addNewItem = (item)=> {
    let localBasket = JSON.parse(localStorage.getItem("localBasket"));
    let index = localBasket.findIndex(product=> product.id === item.id);
    if (index != -1){
        localBasket[index].qty +=1;
    }else{
        localBasket.push(item);
    }
    
    localStorage.setItem('localBasket', JSON.stringify(localBasket));
}

export const removeItem = (_index) =>{
    let localBasket = JSON.parse(localStorage.getItem("localBasket"));
    let index = localBasket.findIndex(product => product.id === _index);
    if (index != -1){
        localBasket[index].qty -=1;
    }else{
        localBasket.splice(index,1);
    }
    localBasket.setItem('localBasket', JSON.stringify(localBasket));
}

export const getAllItems = () => {
    return JSON.parse(localStorage.getItem("localBasket"));
}

export const removeAllItems = () => {
    let localBasket = JSON.parse(localStorage.getItem("localBasket"));
    localBasket.setItem("localBasket", JSON.stringify([]));
}
