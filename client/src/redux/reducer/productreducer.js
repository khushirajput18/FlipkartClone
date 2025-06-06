import * as actionType from '../constant/projectConstant'

export const getProductsReducer=(state={products:[]},action)=>{
 switch(action.type){
    case actionType.GET_PRODUCTS_SUCCESS:
        return {products:action.payload}
        case actionType.GET_PRODUCTS_FAIL:
            return {error:action.payload}
        default: 
        return state
 }
}
export const getProductDetailesReducer=(state={product:{}},action)=>{
switch (action.type) {
    case actionType.GET_PRODUCT_DETAILES_REQUEST:
        return {loading:true}
        case actionType.GET_PRODUCT_DETAILES_SUCCESS:
            return{loading:false,product:action.payload}
            case actionType.GET_PRODUCT_DETAILES_FAIL:
                return {loading:false,error:action.payload}
                case actionType.GET_PRODUCT_DETAILES_RESET:
                    return{product:{}}
           default:
        return state;
}
}