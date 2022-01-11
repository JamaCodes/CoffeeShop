export const CoffeeCard = (coffeeObject) => {
	return `
	<div class="col">
		<div class="card shadow-sm">
          
			<h5 color="primary">${coffeeObject.name}</h5>
            <p class="card-text">${coffeeObject.region}</p>
            <button type="button" class="btn btn-sm btn-outline-secondary" id="deleteCoffee__${coffeeObject.id}" disabled>Delete</button>
            </div>
	</div>
    `
}