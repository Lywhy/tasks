type HashNode = {
    key: string | number;
    value: any;
    next: HashNode | null;
};

class HashMap {
    private buckets: (HashNode | null)[];
    private size: number = 0;
    private readonly initialCapacity: number = 16;

    constructor() {
        this.buckets = new Array(this.initialCapacity).fill(null);
    }

    private hash(key: string | number): number {
        let hashCode = 0;
        
        const keyStr = String(key);
        for (let i = 0; i < keyStr.length; i++) {
            const char = keyStr.charCodeAt(i);
            hashCode = ((hashCode << 5) - hashCode) + char;
            hashCode = hashCode & hashCode; // Convert to 32-bit integer
        }
        
        return Math.abs(hashCode) % this.buckets.length;
    }

    set(key: string | number, value: any): void {
        const index = this.hash(key);
        let node = this.buckets[index];

        while (node) {
            if (node.key === key) {
                node.value = value; 
                return;
            }
            node = node.next;
        }

        const newNode: HashNode = {
            key,
            value,
            next: this.buckets[index] ? this.buckets[index] : null 
        };
        this.buckets[index] = newNode;
        this.size++;
    }

    get(key: string | number): any {
        const index = this.hash(key);
        let node = this.buckets[index];

        while (node) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return undefined;
    }

    delete(key: string | number): boolean {
        const index = this.hash(key);
        let node = this.buckets[index];
        let prev: HashNode | null = null;

        while (node) {
            if (node.key === key) {
                if (prev) {
                    prev.next = node.next;
                } else {
                    this.buckets[index] = node.next;
                }
                this.size--;
                return true;
            }
            prev = node;
            node = node.next;
        }
        return false;
    }

    clear(): void {
        this.buckets = new Array(this.initialCapacity).fill(null);
        this.size = 0;
    }

    getSize(): number {
        return this.size;
    }
}

// Пример использования:
const map = new HashMap();
map.set("age", 25);
map.set("name", "Иван");
console.log(map.get("age")); // 25
map.delete("age");
console.log(map.getSize()); // 1
map.clear();
