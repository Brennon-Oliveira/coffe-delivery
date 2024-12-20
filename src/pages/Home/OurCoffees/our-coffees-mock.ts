import expressoTradicional from "@assets/images/coffees/Image.png";
import expressoAmericano from "@assets/images/coffees/Image-1.png";
import expressoCremoso from "@assets/images/coffees/Image-2.png";
import expressoGelado from "@assets/images/coffees/Image-3.png";
import cafeComLeite from "@assets/images/coffees/Image-4.png";
import latte from "@assets/images/coffees/Image-5.png";
import capuccino from "@assets/images/coffees/Image-6.png";
import macchiato from "@assets/images/coffees/Image-7.png";
import mocaccino from "@assets/images/coffees/Image-8.png";
import chocolateQuente from "@assets/images/coffees/Image-9.png";
import cubano from "@assets/images/coffees/Image-10.png";
import havaiano from "@assets/images/coffees/Image-11.png";
import arabe from "@assets/images/coffees/Image-12.png";
import irlandes from "@assets/images/coffees/Image-13.png";

interface OurCoffesMock {
	id: number;
	tags: string[];
	title: string;
	description: string;
	priceInCents: number;
	image: string;
}

export const ourCoffeesMock: OurCoffesMock[] = [
	{
		id: 0,
		title: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		tags: ["tradicional"],
		priceInCents: 990,
		image: expressoTradicional,
	},
	{
		id: 1,
		title: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		tags: ["tradicional"],
		priceInCents: 990,
		image: expressoAmericano,
	},
	{
		id: 2,
		title: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		tags: ["tradicional"],
		priceInCents: 990,
		image: expressoCremoso,
	},
	{
		id: 3,
		title: "Expresso Gelado",
		description: "Bebida preparada com café expresso e cubos de gelo",
		tags: ["tradicional", "gelado"],
		priceInCents: 990,
		image: expressoGelado,
	},
	{
		id: 4,
		title: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		tags: ["tradicional", "com leite"],
		priceInCents: 990,
		image: cafeComLeite,
	},
	{
		id: 5,
		title: "Latte",
		description:
			"Uma dose de café expresso com o dobro de leite e espuma cremosa",
		tags: ["tradicional", "com leite"],
		priceInCents: 990,
		image: latte,
	},
	{
		id: 6,
		title: "Capuccino",
		description:
			"Bebida com canela feita de doses iguais de café, leite e espuma",
		tags: ["tradicional", "com leite"],
		priceInCents: 990,
		image: capuccino,
	},
	{
		id: 7,
		title: "Macchiato",
		description:
			"Café expresso misturado com um pouco de leite quente e espuma",
		tags: ["tradicional", "com leite"],
		priceInCents: 990,
		image: macchiato,
	},
	{
		id: 8,
		title: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		tags: ["tradicional", "com leite"],
		priceInCents: 990,
		image: mocaccino,
	},
	{
		id: 9,
		title: "Chocolate Quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		tags: ["especial", "com leite"],
		priceInCents: 990,
		image: chocolateQuente,
	},
	{
		id: 10,
		title: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		tags: ["especial", "alcoólico", "gelado"],
		priceInCents: 990,
		image: cubano,
	},
	{
		id: 11,
		title: "Havaiano",
		description: "Bebida adocicada preparada com café e leite de coco",
		tags: ["especial"],
		priceInCents: 990,
		image: havaiano,
	},
	{
		id: 12,
		title: "Árabe",
		description: "Bebida preparada com grãos de café árabe e especiarias",
		tags: ["especial"],
		priceInCents: 990,
		image: arabe,
	},
	{
		id: 13,
		title: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		tags: ["especial", "alcoólico"],
		priceInCents: 990,
		image: irlandes,
	},
];
