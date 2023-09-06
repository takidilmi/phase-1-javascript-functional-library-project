// Define myEach function
function myEach(collection, callback) {
  for (let key in collection) {
    callback(collection[key]);
  }
  return collection;
}

// Define myMap function
function myMap(collection, callback) {
  const result = [];
  for (let key in collection) {
    result.push(callback(collection[key]));
  }
  return result;
}

// Define myReduce function
function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue;
  for (let key in collection) {
    if (accumulator === undefined) {
      accumulator = collection[key];
    } else {
      accumulator = callback(accumulator, collection[key]);
    }
  }
  return accumulator;
}

// Define myFind function
function myFind(collection, callback) {
  for (let key in collection) {
    if (callback(collection[key])) {
      return collection[key];
    }
  }
  return undefined;
}

// Define myFilter function
function myFilter(collection, callback) {
  const result = [];
  for (let key in collection) {
    if (callback(collection[key])) {
      result.push(collection[key]);
    }
  }
  return result;
}

// Define mySize function
function mySize(collection) {
  return Object.keys(collection).length;
}

// Define myFirst function
function myFirst(collection, n = 1) {
  const values = Object.values(collection);
  return n === 1 ? values[0] : values.slice(0, n);
}

// Define myLast function
function myLast(collection, n = 1) {
  const values = Object.values(collection);
  return n === 1 ? values[values.length - 1] : values.slice(-n);
}

// Define myKeys function
function myKeys(object) {
  return Object.keys(object);
}

// Define myValues function
function myValues(object) {
  return Object.values(object);
}
