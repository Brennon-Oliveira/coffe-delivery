import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer } from "./styles";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

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
	initialValue?: number;
}

export function QuantityInputProvider({
	children,
	initialValue,
}: QuantityInputProviderProps) {
	const [quantity, setQuantity] = useState(initialValue ?? 1);

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

interface QuantityInputProps {
	defaultQuantity: number;
}

export function QuantityInput({ defaultQuantity }: QuantityInputProps) {
	const { quantity, decrement, increment, change } =
		useContext(QuantityInputContext);

	function handleIncrement() {
		increment();
	}

	function handleDecrement() {
		decrement();
	}

	return (
		<QuantityInputContainer $inputLength={quantity.toString().length}>
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
