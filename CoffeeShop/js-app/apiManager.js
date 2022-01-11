

const url = "https://localhost:44352/api/beanvariety/";
export function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

export const addBean = (beanObj) => {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(beanObj)
	})
}
