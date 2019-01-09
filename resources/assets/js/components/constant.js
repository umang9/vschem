/**
* @providesModule Constants
*/

let APP_ENV =  'Local';
// let APP_ENV =  'PROD';
let APP_PROD_URL = '/vschem/public/';
let APP_LOCAL_URL = '/';
let APP_URL = APP_ENV === 'Local'? APP_LOCAL_URL : APP_PROD_URL;
const Constant = {
    APP_ENV: APP_ENV,
    APP_URL: APP_URL,
};

export default Constant;