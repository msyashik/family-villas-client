
export const addToOrderList = (payload)=>{
    return {
        type:'ADD_TO_ORDER_LIST',
        payload
    }
}
export const removeFromOrderList = (payload) => {
    return {
        type:'REMOVE_FROM_ORDER_LIST',
        payload
    }
}
export const emptyOrderList = (payload) => {
    return {
        type:'EMPTY_ORDER_LIST',
        payload
    }
}