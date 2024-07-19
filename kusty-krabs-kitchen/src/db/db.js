import pizzaImg from "../images/pizza.png"
import burgerImg from "../images/burger.png"
import cocaImg from "../images/coca.png"
import smallCreamImg from "../images/icecream.png"
import bigCreamImg from "../images/icecream1.png"
import saladImg from "../images/salad.png"
import bottleWaterImg from "../images/water.png"
import krabbyPartiesImg from "../images/krabby-patties.png"
import kebabImg from "../images/kebab.png"
import Fries from "../images/Fries.png"

export function getData(){
    return [
        {title: "Pizza", price: 17.99, Image: pizzaImg},
        {title: "Burger", price: 15, Image: burgerImg},
        {title: "Coca-cola", price: 3.5, Image: cocaImg},
        {title: "Small IceCream", price: 13.99, Image: smallCreamImg},
        {title: "Big IceCream", price: 16, Image: bigCreamImg},
        {title: "Salad", price: 2.5, Image: saladImg},
        {title: "Bottle Water", price: 0.99, Image: bottleWaterImg},
        {title: "Krabby Patty", price: 17, Image: krabbyPartiesImg},
        {title: "Kebab", price: 13.99, Image: kebabImg},
        {title: "Fries", price: 50, Image: Fries},
    ];
};