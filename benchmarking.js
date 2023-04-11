const { v4: uuidv4 } = require('uuid');
const LIST = buildList();
const REGEX = /.123./;

module.exports.arrayFilter = function arrayFilter() {
    return LIST.filter(item => REGEX.test(item));
};

module.exports.arrayEvery = function arrayEvery() {
    const items = [];
    LIST.every(item => {
        REGEX.test(item) && items.push(item);
        return true;
    })
    return items;
};

module.exports.arraySome = function arraySome() {
    const items = [];
    LIST.some(item => {
        REGEX.test(item) && items.push(item);
        return false;
    })
    return items;
};

function buildList(size = 1000000){
    const list = [];
    for(let i = 0; i < size; i++){
        list.push('https://www.url.com/path/' + uuidv4());
    }
    return list;
}
