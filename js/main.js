const getRandomInt = (min,max) => {
    if (min < 0 || max < 0){
        return -1;
    }

    if (max < min){
        [min,max] = [max,min];
    }

    return Math.floor(Math.random() * (min - max + 1)) + min;
};

getRandomInt(1,10);

const stringCount = (text, sing) => {
    return text.length <= sing ? true : false;
};

stringCount('Это проверочное сообщение', 140);