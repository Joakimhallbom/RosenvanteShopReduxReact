import { ADD_TO_CART, REMOVE_FROM_CART, FORM_BASKET} from "../actions/types";


const initialState = {items: []} ;


export default function (state=initialState, action){
    switch (action.type){
        

        case ADD_TO_CART:
            console.log('ADDD');
            
            
            
        return {
              items: action.payload.cartItems
               
            }
        
        case REMOVE_FROM_CART:


        return {
            items: action.payload.cartItems
           }


           case FORM_BASKET:

           return {
               items:action.payload.cartItems,
               
               
           }
        
        default:
            return state;

    }
}











