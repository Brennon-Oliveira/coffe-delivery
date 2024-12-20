import {
	CheckoutConfirmButton,
	CheckoutPreviewCardContainer,
	CheckoutPriceTable,
	CheckoutPriceTableItem,
} from "@/pages/Checkout/CheckoutPreviewCard/styles";
import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";
import { ourCoffeesMock } from "@/pages/Home/OurCoffees/our-coffees-mock";
import { CheckoutSelectedCoffee } from "@/pages/Checkout/CheckoutPreviewCard/CheckoutSelectedCoffee";
import { QuantityInputProvider } from "@/components/QuantityInput";

export function CheckoutPreviewCard() {
	const { products } = useContext(AppContext);

	const totalProductPrice = products.reduce(
		(acc, product) =>
			acc +
			(ourCoffeesMock.find((coffee) => coffee.id === product.id)
				?.priceInCents || 0) *
				product.quantity,
		0,
	);

	const deliveryPrice = 349;

	const totalPrice = totalProductPrice + deliveryPrice;

	return (
		<CheckoutPreviewCardContainer>
			{products.map((product) => {
				const coffee = ourCoffeesMock.find(
					(coffee) => coffee.id === product.id,
				);
				if (!coffee) return;
				return (
					<QuantityInputProvider
						initialValue={product.quantity}
						key={coffee.id}
					>
						<CheckoutSelectedCoffee
							id={coffee.id}
							image={coffee.image}
							price={coffee.priceInCents}
							quantity={product.quantity}
							title={coffee.title}
						/>
					</QuantityInputProvider>
				);
			})}
			<CheckoutPriceTable>
				<tbody>
					<CheckoutPriceTableItem>
						<td>Total de itens</td>
						<td>
							{(totalProductPrice / 100).toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</td>
					</CheckoutPriceTableItem>
					<CheckoutPriceTableItem>
						<td>Entrega</td>
						<td>
							{(deliveryPrice / 100).toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</td>
					</CheckoutPriceTableItem>
					<CheckoutPriceTableItem $variant="total">
						<td>Total</td>
						<td>
							{(totalPrice / 100).toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</td>
					</CheckoutPriceTableItem>
				</tbody>
			</CheckoutPriceTable>
			<CheckoutConfirmButton type="button">
				Confirmar pedido
			</CheckoutConfirmButton>
		</CheckoutPreviewCardContainer>
	);
}
