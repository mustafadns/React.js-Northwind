import * as actionType from "../actions/actionType"
import initialState from "./initialState"

export default function changeCategoryReducer (state=initialState.categories , action) {
    switch (action.type) {
        case actionType.GET_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}