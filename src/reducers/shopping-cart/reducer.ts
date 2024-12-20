import { produce } from "immer";
import {
	type AddProductAction,
	ShoppingCartActions,
	type SHoppingCartAction as ShoppingCartAction,
	type RemoveProductAction,
	type SetProductQuantityAction,
} from "./actions";

export interface Product {
	id: number;
	quantity: number;
}

export interface ShoppingCartState {
	products: Product[];
}

export function shoppingCartReducer(
	state: ShoppingCartState,
	action: ShoppingCartAction,
) {
	const { type } = action;

	if (type === ShoppingCartActions.ADD_PRODUCT) {
		return AddProduct(state, action);
	}

	if (type === ShoppingCartActions.REMOVE_PRODUCT) {
		return RemoveProduct(state, action);
	}

	if (type === ShoppingCartActions.SET_PRODUCT_QUANTITY) {
		return SetProductQuantity(state, action);
	}

	return state;
}

function AddProduct(state: ShoppingCartState, action: AddProductAction) {
	return produce(state, (draft) => {
		const { id, quantity } = action.payload;
		const productIndex = draft.products.findIndex(
			(product) => product.id === id,
		);
		if (productIndex === -1) {
			draft.products.push({ id, quantity });
		} else {
			draft.products[productIndex].quantity += quantity;
		}
	});
}

function RemoveProduct(state: ShoppingCartState, action: RemoveProductAction) {
	return produce(state, (draft) => {
		const { id } = action.payload;
		const productIndex = state.products.findIndex(
			(product) => product.id === id,
		);
		draft.products.splice(productIndex, 1);
	});
}

function SetProductQuantity(
	state: ShoppingCartState,
	action: SetProductQuantityAction,
) {
	return produce(state, (draft) => {
		const { id, quantity } = action.payload;
		const productIndex = state.products.findIndex(
			(product) => product.id === id,
		);
		if (productIndex >= 0) {
			draft.products[productIndex].quantity = quantity;
		} else {
			draft.products = AddProduct(state, {
				type: ShoppingCartActions.ADD_PRODUCT,
				payload: action.payload,
			}).products;
		}
	});
}
