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