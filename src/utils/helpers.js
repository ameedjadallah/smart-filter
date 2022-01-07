export function getJsonFile(filename) {
  return fetch(filename
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      
      return myJson;
    });
};

export function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export function checkShowItem(key, allowedList) {
  if (allowedList[0] === 'all') return true;
  if (allowedList.indexOf(key) !== -1) return true;
  return false;
}

export function getAppliedFilterByName(filters, name) {
  let filter = filters.filter(el => el.name === name);
  if (filter.length) {
    return filter[0].items;
  }
  return [];
}

export function inArray(arr, value) {
  return arr.indexOf(value) !== -1;
}