const stringCount = (text, sing) => {
    return text.length <= sing;
};

stringCount('Это проверочное сообщение', 140);


const getRandomInt = (min,max) => {
    if (min < 0 || max < 0){
        return 1;
    }

    if (max < min){
        [min,max] = [max,min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min,max) => {
    if (max < min){
        [min,max] = [max,min];
    }
    return parseFloat(Math.random() * (max - min) + min);
};
const getRandomArrayElement = (unknowArr) => {
    let arr = [];
    for(let i = 1; i < getRandomInt(1,7); i++){
        arr.push([unknowArr[Math.floor(Math.random()*unknowArr.length)]]);
    }
    return arr;
}

export{getRandomFloat,getRandomInt,getRandomArrayElement};