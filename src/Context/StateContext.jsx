import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchApi = async () => {
    const api = await fetch(`https://dummyjson.com/products`);
    const data = await api.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const initialState = {
    productLists: [],
    cart: [],
  };

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: products });
    const filter = products.filter((pd) =>
      pd.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_PRODUCTS", payload: filter });
  }, [products, search]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch, search, setSearch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const CustomStateContext = () => useContext(StateContext);
