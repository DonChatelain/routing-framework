const sander = require('sander');

const books = Object.create(null);
const dir = 'data';
const path = dir + '/';

books.create = function(obj){

  obj.resource = generateFileName(obj);
  const newPath = path + obj.resource + '.json';
  const objJson = JSON.stringify(obj);

  return sander.writeFile(newPath, objJson)
  .then( () =>{
    return obj;
  });
};

books.read = function(resourceArray) {

  if (resourceArray.length < 1) {
    // Given an empty array, returns a list of resources
    return sander.readdir(path).
    then( fileNames => fileNames.map( e => e.slice(0, -5)));
  } else {

    var map = resourceArray.map( e =>{
      return sander.readFile(path + e + '.json');
    });

    return Promise.all(map)
    .then(jsonItems => jsonItems.map( j => JSON.parse(j)));
  }
};

books.update = function(resource, obj){

  const origPath = path + resource + '.json';
  const newPath = path + obj.resource + '.json';
  const objJson = JSON.stringify(obj);

  return sander.writeFile(newPath, objJson)
  .then(sander.unlink(origPath))
  .then( () =>{
    return obj;
  });

};

books.delete = function(resource){

  const origPath = path + resource + '.json';
  return sander.unlink(origPath)
  .then( () => {
    return {message:'deleted ' + resource};
  });
};

function generateFileName(obj){
  return obj.title.toLowerCase().split(' ').join('_') + '_' + obj.pub_year;
}

module.exports = books;
