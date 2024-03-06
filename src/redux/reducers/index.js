import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer"
import productsListReducer from "./productsListReducer";
import cartReducer from "./cartReducer";
import savedProductReducer from "./saveProductReducer";


const rootReducer = combineReducers ({
    changeCategoryReducer,
    categoryListReducer,
    productsListReducer,
    cartReducer,
    savedProductReducer
})

export default rootReducer;