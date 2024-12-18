import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";
import { createContext, type ReactNode, useContext, useState } from "react";

interface QuantityInputContextValue {
	quantity: number;
	increment: () => void;
	decrement: () => void;
	change: (value: number) => void;
}

export const QuantityInputContext = createContext({
	quantity: 1,
} as QuantityInputContextValue);

interface QuantityInputProviderProps {
	children: ReactNode;
}

export function QuantityInputProvider({
	children,
}: QuantityInputProviderProps) {
	const [quantity, setQuantity] = useState(1);

	function increment() {
		setQuantity((state) => state + 1);
	}

	function decrement() {
		setQuantity((state) => Math.max(state - 1, 1));
	}

	function change(value: number) {
		setQuantity(Math.max(value, 1));
	}

	return (
		<QuantityInputContext.Provider
			value={{ quantity, increment, decrement, change }}
		>
			{children}
		</QuantityInputContext.Provider>
	);
}

export function QuantityInput() {
	const { quantity, decrement, increment, change } =
		useContext(QuantityInputContext);

	function handleIncrement() {
		decrement();
	}

	function handleDecrement() {
		increment();
	}

	return (
		<QuantityInputContainer inputLength={quantity.toString().length}>
			<button type="button" onClick={handleDecrement}>
				<Minus weight="bold" size={".875rem"} />
			</button>
			<input
				type="number"
				min={1}
				value={quantity}
				onChange={(e) => change(Number.parseInt(e.target.value))}
			/>
			<button type="button" onClick={handleIncrement}>
				<Plus weight="bold" size={".875rem"} />
			</button>
		</QuantityInputContainer>
	);
}
