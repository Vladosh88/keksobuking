import {getRandomFloat,getRandomInt,getRandomArrayElement} from './until.js';

const type = ['palace', 'flat', 'house','bungalow'];
const checkin = ['12:00', '13:00','14:00'];
const checkout = ['12:00', '13:00','14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photo = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const creatingObject = () => {
    let arrayObject = [];
    for(let i = 1; i <= 10; i++){
        let unknowObject = {
            author: {
                avatar: 'img/avatars/user'+('0'+ i)+'.png',
            },
            offer : {
                title: 'Объявление',
                address: `${location.x},${location.y}`,
                price: getRandomInt(1,10000),
                type: `${type[getRandomInt(0,3)]}`,
                rooms: getRandomInt(1,4),
                guests: getRandomInt(1,10),
                checkin: String(`${checkin[getRandomInt(0,2)]}`),
                checkout: String(`${checkout[getRandomInt(0,2)]}`),
                features: getRandomArrayElement(features),
                description: 'Описание номера',
                photo:getRandomArrayElement(photo),
            },
            location: {
                x:getRandomFloat(35.65000,35.70000).toPrecision(7),
                y:getRandomFloat(139.70000,139.80000).toPrecision(8),
            }
        
        }
        arrayObject.push([unknowObject]);
    }
    console.log(arrayObject);
};

export {creatingObject};