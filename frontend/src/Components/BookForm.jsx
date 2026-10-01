import { useState } from 'react'
import { createBook } from '../api'

function BookForm({onDataChange}) {
    const [data, setData] = useState({
        title: '',
        author: '',
        isbn: '',
        category: '',
        publicationYear: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await createBook(data)
        onDataChange()
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="title" type="text" placeholder="Book Title" required value={data.bookTitle} onChange={handleChange} />
            <input name="author" type="text" placeholder="Author Name" required value={data.authorName} onChange={handleChange} />
            <input name="isbn" type="text" placeholder="ISBN" required value={data.isbn} onChange={handleChange} />
            <input name="category" type="text" placeholder="Category" required value={data.category} onChange={handleChange} />
            <input name="publicationYear" type="number" placeholder="Publication Year" required value={data.publicationYear} onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    )
}

export default BookForm