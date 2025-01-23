export { LinkedList };

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node();
        newNode.value = value;
        if (this.tail) {
            this.tail.nextNode = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new Node();
        newNode.value = value;
        if (this.head) {
            newNode.nextNode = this.head;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    size() {
        let counter = 0;
        if (this.head) {
            counter++;
            let pointer = this.head;
            while (pointer.nextNode) {
                counter++;
                pointer = pointer.nextNode;
            }
        }
        return counter;
    }

    at(index) {
        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }

    pop() {
        let pointer = this.head;
        while (pointer.nextNode !== this.tail) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
        this.tail = pointer;
    }

    contains(value) {
        let pointer = this.head;
        if (pointer.value === value) {return true};
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            if (pointer.value === value) {return true};
        }
        return false;
    }

    find(value) {
        let pointer = this.head;
        let i;
        for (i = 0; i < value; i++) {
            while (pointer.nextNode) {
                if (pointer.value === value) {
                    return i;
                }
                pointer = pointer.nextNode;
            }
        }
        if (pointer.value === value) {return i};
    }

    toString() {
        let pointer = this.head;
        let printString = '';
        while (pointer.nextNode) {
            printString += `( ${pointer.value } ) => `
            pointer = pointer.nextNode;
        }
        printString += `( ${pointer.value} ) => null`;
        return printString
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return
        }
        const newNode = new Node();
        newNode.value = value;
        let pointer = this.head;
        let toPrecede;
        for (let i = 0; i < index; i++) {
            if (i === index - 1) {
                toPrecede = pointer;
            }
            pointer = pointer.nextNode;
        }
        newNode.nextNode = pointer;
        toPrecede.nextNode = newNode;
    }

    removeAt(index) {
        let pointer = this.head;
        if (index === 0) {
            this.head = pointer.nextNode;
        } else {
            let toPrecede;
            for (let i = 0; i < index; i++) {
                if (i === index - 1) {
                    toPrecede = pointer;
                }
                pointer = pointer.nextNode;
            }
            toPrecede.nextNode = pointer.nextNode;
        }   
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}