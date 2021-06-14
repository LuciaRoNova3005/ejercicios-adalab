/*Siempre tenemos un key un valor
 */

const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (
    data === null
    /*no tienes datos
    me devuelves los predefinido en este caso un array vacio */
  ) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const objToExport = {
  get: get,
  set: set,
};

export default objToExport;
