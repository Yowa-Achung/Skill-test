import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import './App.css'
import { useState, useEffect } from 'react'
import { getBooks } from './api'

function App() {
  const [books, setBooks] = useState([

  ])

  const onDataChange = async () => {
    const data = await getBooks()
    setBooks(data.data)
  }

  useEffect(() => {
    onDataChange()
  }, [])

  return (
    <>
      <BookForm onDataChange={onDataChange} />
      <BookList books={books} />
    </>
  )
}

export default App
