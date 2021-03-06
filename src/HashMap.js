const MapNode = require('./MapNode');
const hashCode = require('./hashCode');

class HashMap {
    constructor() {
        this._capacity = 2 ** 4;
        this._buckets = Array.from({ length: this._capacity }, (v, k) => new MapNode());
    }

    set(key, value) {
        let node = this._getBucketNode(key);
        while (node.next) {
            if (node.next.key === key) {
                node.next.value = value;
                return;
            }
            node = node.next;
        }
        node.next = new MapNode(key, value);
    }

    get(key) {
        let node = this._getBucketNode(key);
        while (node.next) {
            if (node.next.key === key) return node.next.value;
        }
        return undefined;
    }

    has(key) {
        let node = this._getBucketNode(key);
        while (node.next) {
            if (node.next.key === key) return true;
        }
        return false;
    }

    delete(key) {
        let node = this._getBucketNode(key);
        while (node.next) {
            if (node.next.key === key) {
                this._removeNextNode(node);
                break;
            }
        }
    }

    clear() {
        this._buckets.forEach((_, index, array) => array[index].next = null);
    }

    _getBucketNode(key) {
        return this._buckets[this._getBucket(key)];
    }

    _getBucket(key) {
        return hashCode(key) % this._capacity;
    }

    _removeNextNode(node) {
        node.next = node.next.next;
    }
}

module.exports = HashMap;