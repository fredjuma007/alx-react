const { fromJS } = require('immutable');

//function that takes an object and returns an immutable map
function getImmutableObject(object) {
  return fromJS(object);
}

var inputObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

var immutableMap = getImmutableObject(inputObject);
console.log(immutableMap);
