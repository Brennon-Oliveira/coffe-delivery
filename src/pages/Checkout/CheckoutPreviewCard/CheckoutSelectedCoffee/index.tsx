import {
	QuantityInput,
	QuantityInputContext,
} from "@/components/QuantityInput";
import { AppContext } from "@/contexts/AppContext";
import {
	CheckoutDivider,
	CheckoutSelectedCoffeeButtons,
	CheckoutSelectedCoffeeContainer,
} from "@/pages/Checkout/CheckoutPreviewCard/CheckoutSelectedCoffee/styles";
import { Trash } from "phosphor-react";
import { useContext, useEffect } from "react";

interface CheckoutSelectedCoffeeProps {
	id: number;
	image: string;
	quantity: number;
	title: string;
	price: number;
}

export function CheckoutSelectedCoffee({
	id,
	image,
	price,
	quantity,
	title,
}: CheckoutSelectedCoffeeProps) {
	const { removeProduct, setProductQuantity } = useContext(AppContext);
	const { quantity: inputQuantity } = useContext(QuantityInputContext);

	useEffect(() => {
		setProductQuantity({
			id,
			quantity: inputQuantity,
		});
	}, [id, inputQuantity, setProductQuantity]);

	function handleRemoveProduct() {
		removeProduct({
			id,
		});
	}

	return (
		<>
			<CheckoutSelectedCoffeeContainer>
				<div>
					<img src={image} alt="" />
					<div>
						<h4>{title}</h4>
						<CheckoutSelectedCoffeeButtons>
							<QuantityInput defaultQuantity={quantity} />
							<button type="button" onClick={handleRemoveProduct}>
								<Trash size={"1rem"} /> Remover
							</button>
						</CheckoutSelectedCoffeeButtons>
					</div>
				</div>
				<p>
					{((price * quantity) / 100).toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</p>
			</CheckoutSelectedCoffeeContainer>
			<CheckoutDivider />
		</>
	);
}
