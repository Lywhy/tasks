interface Product {
    id: number;
    date: string;
    title: string;
}

interface Iterator<T> {
    next(): IteratorResult<T>;
    hasNext(): boolean;
}

class ProductArray {
    constructor(private products: Product[]) { }

    createIterator(sortBy: 'id' | 'date'): Iterator<Product> {
        const sorted = [...this.products].sort((a, b) =>
            sortBy === 'id' ? a.id - b.id : a.date.localeCompare(b.date)
        );
        return new ArrayIterator(sorted);
    }
}

class ArrayIterator<T> implements Iterator<T> {
    private index = 0;

    constructor(private array: T[]) { }

    next(): IteratorResult<T> {
        if (this.hasNext()) {
            return {
                done: false,
                value: this.array[this.index++] as T
            };
        }

        return {
            done: true,
            value: undefined
        };
    }


    hasNext(): boolean {
        return this.index < this.array.length;
    }
}


const products: Product[] = [
    { id: 1, date: '01-01-2023', title: 'Test1' },
    { id: 3, date: '02-01-2023', title: 'Test3' },
    { id: 2, date: '03-01-2023', title: 'Test2' }
];

const collection = new ProductArray(products);

const idIterator = collection.createIterator('id');
while (idIterator.hasNext()) {
    console.log(idIterator.next().value);
}

const dateIterator = collection.createIterator('date');
while (dateIterator.hasNext()) {
    console.log(dateIterator.next().value);
}
