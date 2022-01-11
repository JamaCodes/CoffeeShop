import {getAllBeanVarieties, addBean} from "./apiManager.js"
import {CoffeeList} from "./Coffeelist.Js"
import {BeanEntry} from "./AddBean.js"

    

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
const showBeanEntry = () => {
		const listElement = document.querySelector(".addBean")
		listElement.innerHTML = BeanEntry();
}
showBeanEntry();
showCoffeeList();

const applicationElement = document.querySelector(".newBean")
applicationElement.addEventListener("click", event => {
    if (event.target.id === "newBean__cancel") {
        //clear the input fields
    }
  })
  
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newBean__submit") {
    //collect the input values into an object to post to the DB
      const name = document.querySelector("input[name='name']").value
      const region = document.querySelector("input[name='region']").value
   
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const beanObject = {
          name: name,
          region: region,
      }
  
    // be sure to import from the DataManager
        addBean(beanObject)
    }
    showCoffeeList();
  })
