

export const initialUserDataState = {
    cart: [],
  
  };
  
  export const userReducerFtn = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      }
      case "REMOVE_FROM_CART": {
        return {
          ...state,
          cart: state.cart.filter((el) => el.id !== action.payload.id),
        };
      }
      case "INCREMENT_QUANTITY": {
        return {
          ...state,
          cart: state.cart.map((el) => {
            if (el.id === action.payload.id && el.selectedWt == action.payload.selectedWt) return { ...el, qty: el.qty + 1 };
            return el;
          }),
        };
      }
      case "DECREMENT_QUANTITY": {
        return {
          ...state,
          cart: state.cart.map((el) => {
            if (el.id === action.payload.id && el.selectedWt == action.payload.selectedWt) return { ...el, qty: el.qty - 1 };
            return el;
          }),
        };
      }
      case "SET_CART": {
        return { ...state, cart: [...action.payload] };
      }
      case "CLEAR_CART" : {
          return {...state , cart : []}
      }
      case "CLEAR_USER_DATA": {
        return initialUserDataState;
      }
  
      default:
          return state
    }
  };