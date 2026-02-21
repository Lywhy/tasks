class API {
    async getProduct(id: string): Promise<any> {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('API error');
        return response.json();
    }
}

class ProductProxy {
    constructor(private api: API) { }

    async getProduct(id: string): Promise<any> {
        if (parseInt(id) > 10) {
            throw new Error(`Product ${id} is not accessible`);
        }

        return this.api.getProduct(id);
    }
}

const api = new API();
const proxy = new ProductProxy(api);

proxy.getProduct('1').then(console.log);
proxy.getProduct('15').catch(err => console.log(err.message));