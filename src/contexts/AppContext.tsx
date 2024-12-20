import { Immer, produce } from "immer";
import {
	createContext,
	useCallback,
	useEffect,
	useReducer,
	type ReactNode,
} from "react";
import {
	type Product,
	shoppingCartReducer,
	type ShoppingCartState,
} from "../reducers/shopping-cart/reducer";
import { ShoppingCartActions } from "../reducers/shopping-cart/actions";

interface AddProductParams {
	id: number;
	quantity: number;
}

interface RemoveProductParams {
	id: number;
}

interface SetProductQuantityParams {
	id: number;
	quantity: number;
}

interface AppContextData {
	products: Product[];
	addProduct: (params: AddProductParams) => void;
	removeProduct: (params: RemoveProductParams) => void;
	setProductQuantity: (params: SetProductQuantityParams) => void;
}

export const AppContext = createContext({} as AppContextData);

interface AppContextProviderProps {
	children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
	const [shoppingCartState, dispatch] = useReducer(
		shoppingCartReducer,
		{
			products: [],
		} as ShoppingCartState,
		(state) => {
			const storedStateAsJSON = localStorage.getItem(
				"@coffee-delivery:shopping-cart-state-1.0.0",
			);

			if (storedStateAsJSON) {
				return JSON.parse(storedStateAsJSON) as ShoppingCartState;
			}
			return state;
		},
	);

	const { products } = shoppingCartState;

	useEffect(() => {
		const shoppingCartStateAsJson = JSON.stringify(shoppingCartState);

		localStorage.setItem(
			"@coffee-delivery:shopping-cart-state-1.0.0",
			shoppingCartStateAsJson,
		);
	}, [shoppingCartState]);

	const addProduct = useCallback(({ id, quantity }: AddProductParams) => {
		dispatch({
			type: ShoppingCartActions.ADD_PRODUCT,
			payload: {
				id,
				quantity,
			},
		});
	}, []);

	const removeProduct = useCallback(({ id }: RemoveProductParams) => {
		dispatch({
			type: ShoppingCartActions.REMOVE_PRODUCT,
			payload: {
				id,
			},
		});
	}, []);

	const setProductQuantity = useCallback(
		({ id, quantity }: SetProductQuantityParams) => {
			dispatch({
				type: ShoppingCartActions.SET_PRODUCT_QUANTITY,
				payload: {
					id,
					quantity,
				},
			});
		},
		[],
	);

	return (
		<AppContext.Provider
			value={{ products, addProduct, removeProduct, setProductQuantity }}
		>
			{children}
		</AppContext.Provider>
	);
}
