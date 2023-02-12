//Generate Random String
const randomString = Math.random().toString(36).slice(2);

//Detected Dark Mode
const isDarkMode = window.matchMedia 
                    && window.matchMedia('(prefers-color-scheme:dark)').matches;

//Elemento Activo en el documento(Focus)
const elementActive = document.activeElement;

//Validar si es un array
const isArray = Array.isArray(arr1);

//Validate Array is Empty
const arrayIsEmpty = !(Array.isArray(arr1) && arr1.length > 0);

//Random Hex Color
const hexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

//Difference between two dates
const difDates = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

//Unique in array, Set: Object Type that does not support repeats
const uniqueElements = (elements) => [... new Set(elements)];

//Save object data in LocalStorage or SessionStorage
const saveDataInStorage = (name, data) => localStorage.setItem(name, JSON.stringify(data));

//Get object data
const getDataInStorage = (name) => JSON.parse(localStorage.getItem(name));

//Validate equals array
const isEquals = (array1, array2) => JSON.stringify(array1) == JSON.stringify(array2);

//Get data by JSON
const getDataByJSON = async (directory) => {
    const request = await fetch(directory);
    const response = await request.json();

    return response;
}

//Detect if you have connection
const getNetworkState = () => navigator.onLine;

//Generate random id
const generateID = () => {
    const currentString = Date.now().toString(35);//Convert Date in base 35
    const number = Math.random().toString(36).slice(2);

    return currentString + number;
}

//Generate ID Correlative
function* generateCorrelativeID(lastID) {
    let numberId = lastID || 0;

    while(true){
        numberId++;
        yield numberId;
    }
}
//Const ID = generateCorrelativeID();
//ID.next().value

const currencyFormat = (number, money) => {
  let strFormat = new Intl.NumberFormat('de-DE', {
    style: 'currency', currency: money
  }).format(number);

  return strFormat;
}
