import "dotenv/config";

const names = process.env.MY_NAME; 
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`I am ${names}, wilder in ${city}, and i love ${language}`);