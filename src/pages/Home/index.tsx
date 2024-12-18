import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coverImage from "@assets/images/cover-image.png";
import {
	BannerContent,
	BannerExternalContainer,
	BannerInternalContainer,
	BannerItem,
	HomeContainer,
} from "./styles";
import { OurCoffees } from "./OurCoffees";

export function Home() {
	return (
		<HomeContainer>
			<BannerExternalContainer>
				<BannerInternalContainer>
					<BannerContent>
						<div>
							<h1>Encontre o café perfeito para qualquer hora do dia</h1>
							<p>
								Com o Coffee Delivery você recebe seu café onde estiver, a
								qualquer hora
							</p>
						</div>
						<div>
							<BannerItem variant="orange">
								<span>
									<ShoppingCart weight="fill" />
								</span>
								Compra simples e segura
							</BannerItem>
							<BannerItem variant="gray">
								<span>
									<Package weight="fill" />
								</span>
								Embalagem mantém o café intacto
							</BannerItem>
							<BannerItem variant="yellow">
								<span>
									<Timer weight="fill" />
								</span>
								Entrega rápida e rastreada
							</BannerItem>
							<BannerItem variant="purple">
								<span>
									<Coffee weight="fill" />
								</span>
								O café chega fresquinho até você
							</BannerItem>
						</div>
					</BannerContent>
					<img
						src={coverImage}
						alt="Imagem de um copo de café com sementes de café"
					/>
				</BannerInternalContainer>
			</BannerExternalContainer>
			<OurCoffees />
		</HomeContainer>
	);
}
