import * as actionTypes from "../actions/actionType"
import initialState from "./initialState"

export default function saveProductReducer (state=initialState.savedProduct , action) {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case actionTypes.CREATE_PRODUCTS_SUCCESS:
            return state;   
        default:
            return state;
    }
}