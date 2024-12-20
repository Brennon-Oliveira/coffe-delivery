import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
	QuantityInput,
	QuantityInputContext,
	QuantityInputProvider,
} from "@/components/QuantityInput";
import {
	CoffeeItemAddCartButton,
	CoffeeItemContainer,
	CoffeeItemFooter,
	CoffeeItemPrice,
	CoffeeItemTagContainer,
} from "./styles";
import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";

interface CoffeeItemProps {
	id: number;
	tags: string[];
	title: string;
	description: string;
	priceInCents: number;
	image: string;
}

export function CoffeeItem({
	id,
	title,
	description,
	priceInCents,
	tags,
	image,
}: CoffeeItemProps) {
	const { addProduct } = useContext(AppContext);
	const { quantity } = useContext(QuantityInputContext);

	function handleAddProduct() {
		addProduct({ id, quantity });
	}

	return (
		<CoffeeItemContainer>
			<img src={image} alt="" />
			<CoffeeItemTagContainer>
				{tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</CoffeeItemTagContainer>
			<h3>{title}</h3>
			<p>{description}</p>
			<CoffeeItemFooter>
				<CoffeeItemPrice>
					<span>R$</span> <span>{(priceInCents / 100).toFixed(2)}</span>
				</CoffeeItemPrice>
				<div>
					<QuantityInput />
					<CoffeeItemAddCartButton type="button" onClick={handleAddProduct}>
						<ShoppingCart weight="fill" size={"1.375rem"} />
					</CoffeeItemAddCartButton>
				</div>
			</CoffeeItemFooter>
		</CoffeeItemContainer>
	);
}
