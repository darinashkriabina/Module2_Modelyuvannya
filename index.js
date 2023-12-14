//Функція повинна приймати список чисел і повертати новий список, 
//де кожне число збільшене на 10.

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addTenToElements (arr){
    const newArr = [];
    if (Array.isArray(arr)){
        arr.forEach((el) => {
            newArr.push(el + 10);
        });
    } else throw newError("Це не список");
    return newArr;
}

const newList = addTenToElements(list);
console.log(newList);