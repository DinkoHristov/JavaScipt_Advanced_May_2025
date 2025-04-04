class List {
    #list;

    constructor() {
        this.#list = [];
        this.size = 0;
    }

    add(element) {
        this.#list.push(element);

        this.size = this.#list.length;
    }

    remove(index) {
        if (index >= 0 && index < this.#list.length) {
            this.#list.sort( (a, b) => a - b);
            this.#list.splice(index, 1);

            this.size = this.#list.length;
        }
    }

    get(index) {
        if (index >= 0 && index < this.#list.length) {
            this.#list.sort( (a, b) => a - b);
            
            return this.#list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));