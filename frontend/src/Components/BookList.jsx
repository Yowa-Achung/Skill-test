

function BookList({ books }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Category</th>
                        <th>Publication Year</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.category}</td>
                            <td>{book.publicationYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default BookList