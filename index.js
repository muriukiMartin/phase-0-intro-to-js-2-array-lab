// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    return name;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return name;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}

function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
}

function removeLastCat() {
    let newCats = cats.slice(0, -1);
    return newCats;
}