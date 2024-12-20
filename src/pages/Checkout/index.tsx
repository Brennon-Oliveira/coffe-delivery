import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
	Trash,
} from "phosphor-react";
import {
	CheckoutAddressForm,
	CheckoutAddressFormInput,
	CheckoutBlock,
	CheckoutContainer,
	CheckoutFormHeader,
	CheckoutPaymentType,
	CheckoutPaymentTypeForm,
	CheckoutPaymentTypesContainer,
} from "@/pages/Checkout/styles";
import { CheckoutPreviewCard } from "@/pages/Checkout/CheckoutPreviewCard";

export function Checkout() {
	return (
		<CheckoutContainer>
			<CheckoutBlock>
				<h2>Complete seu pedido</h2>
				<CheckoutAddressForm>
					<CheckoutFormHeader>
						<MapPinLine size={"1.375rem"} />
						<div>
							<h3>Endereço de Entrega</h3>
							<p>Informe o endereço onde deseja receber seu pedido</p>
						</div>
					</CheckoutFormHeader>
					<div>
						<CheckoutAddressFormInput placeholder="CEP" />
						<CheckoutAddressFormInput placeholder="Rua" />
						<CheckoutAddressFormInput placeholder="Número" />
						<CheckoutAddressFormInput placeholder="Complemento" />
						<CheckoutAddressFormInput placeholder="Bairro" />
						<CheckoutAddressFormInput placeholder="Cidade" />
						<CheckoutAddressFormInput placeholder="UF" />
					</div>
				</CheckoutAddressForm>
				<CheckoutPaymentTypeForm>
					<CheckoutFormHeader>
						<CurrencyDollar size={"1.375rem"} />
						<div>
							<h3>Pagamento</h3>
							<p>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</p>
						</div>
					</CheckoutFormHeader>
					<CheckoutPaymentTypesContainer>
						<CheckoutPaymentType>
							<CreditCard size={"1rem"} />
							Cartão de crédito
							<input type="radio" name="payment-type" value="credit-card" />
						</CheckoutPaymentType>
						<CheckoutPaymentType>
							<Bank size={"1rem"} />
							Cartão de débito
							<input type="radio" name="payment-type" value="debit-card" />
						</CheckoutPaymentType>
						<CheckoutPaymentType>
							<Money size={"1rem"} />
							Dinheiro
							<input type="radio" name="payment-type" value="money" />
						</CheckoutPaymentType>
					</CheckoutPaymentTypesContainer>
				</CheckoutPaymentTypeForm>
			</CheckoutBlock>
			<CheckoutBlock>
				<h2>Cafés selecionados</h2>
				<CheckoutPreviewCard />
			</CheckoutBlock>
		</CheckoutContainer>
	);
}
