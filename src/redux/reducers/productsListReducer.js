import * as actionTypes from "../actions/actionType"
import initialState from "./initialState"

export default function productsListReducer (state=initialState.products , action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}