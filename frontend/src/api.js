import axios from 'axios';

const createBook = (data) => axios.post('http://localhost:5000/api/books', data);
const getBooks = () => axios.get('http://localhost:5000/api/books');

export { createBook, getBooks};