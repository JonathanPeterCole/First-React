import data from './data.json'

export default function getResults (search) {
  if (search === '') {
    // Return all notes if the search bar is empty
    return data
  } else {
    // If the search bar isn't empty, check if the search term is in the note title
    return data
      .filter(note => {
        if (note.title.toLowerCase().includes(search.toLowerCase())) {
          return true
        }
        return false
      })
  }
}
