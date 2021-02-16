import React, {useEffect, useState} from 'react';

// https://github.com/gitfrosh/lotr-api
// https://the-one-api.dev/
// https://the-one-api.dev/v2/book
// https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg

const fetchBooks = async () => {
    const response = await fetch(`https://the-one-api.dev/v2/book`);
    const result = await response.json();
    return result;
};

const List = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetchBooks().then(data => setBooks(data.docs));
    }, []);

    return (
        <section className="books">
            {books.map(book => {
                return (
                    <Item key={book._id} book={book}/>
                )
            })}
        </section>
    );
}

const Item = ({book}) => {
    return (
        <div>
            <h3>{book.name}</h3>
            {console.log(book._id)}
        </div>
    );
}

const Books = () => {
    return (
        <div className="books">
            <List/>
        </div>
    );
}

export default Books;