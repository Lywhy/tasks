'use strict';

const productIds = [1, 2, 3];

function fetchProducts(id) {
    return fetch(`https://dummyjson.com/products/${id}`);
}

async function race(ids) {
    try {
        const products = ids.map(id => fetchProducts(id));
        const res = await Promise.race(products);
        return await res.json();
    } catch (error) {
        throw new Error(error)
    }
}

race(productIds).then((res) => console.log(res));