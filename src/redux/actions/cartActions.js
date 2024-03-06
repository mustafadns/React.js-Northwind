import * as actionType from "./actionType"

export function addToCart (cartItem) {
    return {type:actionType.ADD_TO_CART , payload:cartItem}
}

export function remoweFromCart (product) {
    return {type:actionType.REMOWE_FROM_CART , payload:product}
}