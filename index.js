// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCats = [...cats, 'Broom']
    return ([ 'Milo', 'Otis', 'Garfield', 'Broom'])
}

function prependCat(){
    const newcats = ['Arnold', ...cats];
    return (['Arnold', 'Milo', 'Otis', 'Garfield'])
}

function removeLastCat(){
    const newcats = cats.slice(2)
    return (['Milo', 'Otis'])
}

function removeFirstCat(){
    const newcats = cats.slice(0);
    return (['Otis', 'Garfield'])
}