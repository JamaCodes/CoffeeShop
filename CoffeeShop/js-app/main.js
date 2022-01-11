import {getAllBeanVarieties} from "./apiManager.js"
import {CoffeeList} from "./Coffeelist.Js"

    

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

const showCoffeeList = () => {
	getAllBeanVarieties().then(allCoffee => {
		const listElement = document.querySelector(".mainContainer")
		listElement.innerHTML = CoffeeList(allCoffee);
	})
}

showCoffeeList();

