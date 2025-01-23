export { LinkedList };

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(key, value) {
        const newNode = new Node();
        newNode.key = key;
        newNode.value = value;
        if (this.tail) {
            this.tail.nextNode = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    prepend(key, value) {
        const newNode = new Node();
        newNode.key = key;
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

    contains(key) {
        let pointer = this.head;
        if (pointer.key === key) {return true};
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            if (pointer.key === key) {return true};
        }
        return false;
    }

    find(key) {
        let pointer = this.head;
        while (pointer.nextNode) {
            if (pointer.key === key) {
                return pointer.value;
            }
            pointer = pointer.nextNode;
        }
        
        if (pointer.key === key) {return pointer.value};
        return null;
    }

    toString() {
        let pointer = this.head;
        let printString = '';
        while (pointer.nextNode) {
            printString += `( ${pointer.value } ) => `
            pointer = pointer.nextNode;
        }
        printString += `( ${pointer.key} : ${pointer.value} ) => null`;
        return printString
    }

    insertAt(key, value, index) {
        if (index === 0) {
            this.prepend(key, value);
            return
        }
        const newNode = new Node();
        newNode.key = key;
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

    remove(key) {
        let pointer = this.head;
        if (this.head.key === key) {
            this.head = pointer.nextNode;
            if (!this.head) {
                this.tail = null;
            }
            return true;
        } else {
            while (pointer.nextNode) {
                let previousNode = pointer;
                pointer = pointer.nextNode;
                if (pointer.key === key) {
                    previousNode.nextNode = pointer.nextNode;
                    return true;
                }
            }
            return false;
        }   
    }
}

class Node {
    constructor() {
        this.key = null;
        this.value = null;
        this.nextNode = null;
    }
}