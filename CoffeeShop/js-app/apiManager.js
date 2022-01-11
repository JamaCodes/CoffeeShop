

const url = "https://localhost:44352/api/beanvariety/";
export function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}