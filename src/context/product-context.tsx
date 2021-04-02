import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
} from 'react';
import { IProductData } from '../services/products';

interface Action {
  type: string;
  payload: any;
}

interface State {
  favorites: IProductData[];
  cart: IProductData[];
}

const initialState: State = {
  favorites: [],
  cart: [],
};

const ProductContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const useProductContext = () => {
  return useContext(ProductContext);
};

// ACTIONS
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// ACTION CREATORS
const addToFavorites = (product: IProductData) => ({
  type: ADD_TO_FAVORITES,
  payload: { product },
});
const removeFromFavorites = (id: number) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: { id },
});
const addToCart = (product: IProductData) => ({
  type: ADD_TO_CART,
  payload: { product },
});
const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

// REDUCER
const productReducer = (state: State, action: Action) => {
  const { favorites, cart } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_FAVORITES:
      if (
        favorites.find((product) => product.id === payload.product.id) !==
        undefined
      )
        return state;

      return {
        ...state,
        favorites: favorites.concat(payload.product),
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: favorites.filter((fav) => fav.id !== payload.id),
      };
    case ADD_TO_CART:
      if (
        cart.find((product) => product.id === payload.product.id) !== undefined
      )
        return state;

      return {
        ...state,
        cart: cart.concat(payload.product),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: cart.filter((fav) => fav.id !== payload.id),
      };
    default:
      return state;
  }
};

const ProductContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export {
  useProductContext,
  addToFavorites,
  removeFromFavorites,
  addToCart,
  removeFromCart,
};
export default ProductContextProvider;
