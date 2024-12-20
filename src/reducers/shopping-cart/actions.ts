export enum ShoppingCartActions {
	ADD_PRODUCT = "ADD_PRODUCT",
	REMOVE_PRODUCT = "REMOVE_PRODUCT",
	SET_PRODUCT_QUANTITY = "SET_PRODUCT_QUANTITY",
}

interface BaseShoppingCartAction<T extends ShoppingCartActions, K> {
	type: T;
	payload: K;
}

export interface AddProductAction
	extends BaseShoppingCartAction<
		ShoppingCartActions.ADD_PRODUCT,
		{
			id: number;
			quantity: number;
		}
	> {}

export interface RemoveProductAction
	extends BaseShoppingCartAction<
		ShoppingCartActions.REMOVE_PRODUCT,
		{
			id: number;
		}
	> {}

export interface SetProductQuantityAction
	extends BaseShoppingCartAction<
		ShoppingCartActions.SET_PRODUCT_QUANTITY,
		{
			id: number;
			quantity: number;
		}
	> {}

export type SHoppingCartAction =
	| AddProductAction
	| RemoveProductAction
	| SetProductQuantityAction;
