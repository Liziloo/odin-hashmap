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

    keys() {
        const theseKeys = [];
        let pointer = this.head;
        theseKeys.push(pointer.key);
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            theseKeys.push(pointer.key);
        }
        return theseKeys;
    }

    values() {
        const theseValues = [];
        let pointer = this.head;
        theseValues.push(pointer.value);
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            theseValues.push(pointer.value);
        }
        return theseValues;
    }

    entries() {
        if (!this.head) {return []}
        const theseEntries = [];
        let pointer = this.head;
        theseEntries.push([pointer.key, pointer.value]);
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            theseEntries.push([pointer.key, pointer.value]);
        }
        return theseEntries;
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

    changeValue(key, value) {
        if (!this.head) {return false};
        let pointer = this.head;
        if (pointer.key === key) {
            pointer.value = value;
            return true;
        }
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            if (pointer.key  === key) {
                pointer.value = value;
                return true;
            }
        }
        return false;
    }
}

class Node {
    constructor() {
        this.key = null;
        this.value = null;
        this.nextNode = null;
    }
}