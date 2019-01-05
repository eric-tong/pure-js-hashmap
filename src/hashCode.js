function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const character = key.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash = hash & hash;
    }
    return hash;
}

module.exports = hashCode;