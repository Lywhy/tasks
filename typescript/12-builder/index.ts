type methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

class Request {
    method: methods = 'GET';
    headers: Record<string, string> = {};
    body: string | FormData | URLSearchParams = '';
    url: string = '';
}

interface RequestOptions {
    method?: methods;
    headers?: Record<string, string>;
    body?: string | FormData | URLSearchParams;
}

class RequestBuilder {
    private request = new Request();

    method(method: methods): this {
        this.request.method = method;
        return this;
    }

    header(key: string, value: string): this {
        this.request.headers[key] = value;
        return this;
    }

    body(body: string | FormData | URLSearchParams): this {
        this.request.body = body;
        return this;
    }

    url(url: string): this {
        this.request.url = url;
        return this;
    }

    async exec(): Promise<Response> {
        const options: RequestOptions = {
            method: this.request.method,
            headers: this.request.headers,
            ...(this.request.body !== undefined && { body: this.request.body })
        };

        return fetch(this.request.url, options);
    }

}

const response = await new RequestBuilder()
    .url('https://api.example.com/users')
    .method('POST')
    .header('Content-Type', 'application/json')
    .header('Authorization', 'Bearer token')
    .body(JSON.stringify({ name: 'John' }))
    .exec();

const data = await response.json();
console.log(data);