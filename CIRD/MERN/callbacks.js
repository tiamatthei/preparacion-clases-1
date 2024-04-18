const fruits3 = ["apple", "banana", "orange"];

// Passing index in parameter for Callback function
const funcionCallback = (item, idx, array) => {
  console.log(`${idx}: ${item} - ${array}`);
};

function funcionOld(item, idx, array) {
  console.log(`${idx}: ${item} - ${array}`);
}

fruits3.forEach(funcionCallback);

