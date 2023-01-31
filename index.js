const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const catsAppended = [...cats];
    catsAppended.push(name);
    return catsAppended;
}

function prependCat(name){
    const catsAppended = [...cats];
    catsAppended.unshift(name);
    return catsAppended;
}

function removeLastCat(){
    const catsAppended = [...cats];
    catsAppended.pop();
    return catsAppended;
}

function removeFirstCat(){
    const catsAppended = [...cats];
    catsAppended.shift();
    return catsAppended;
}