// ❓DESCRIPTION:
// The updateRecords function takes 4 arguments represented by the following function parameters:

// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array.
//  First, if the album does not have a tracks property, assign it an empty array.
//  Then add the value as the last item in the album's tracks array.

// ✅ Solution1:(моё решение)

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
}

function updateRecords(records, id, prop, value) {
  if (!value) {
    delete records[id][prop]
  }
  if (value && prop !== 'tracks') {
    records[id][prop] = value
  }
  if (prop === 'tracks' && value) {
    if (!records[id].hasOwnProperty(prop)) {
      records[id][prop] = []
    }
    records[id][prop].push(value)
  }

  return records
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))
console.log(updateRecords(recordCollection, 2468, 'tracks', 'Free')) //  'tracks': [ '1999', 'Little Red Corvette', 'Free' ]
