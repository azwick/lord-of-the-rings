import { Button, Card, CardActions, CardHeader, Grid } from "@material-ui/core";
import React, {useEffect, useState} from 'react';

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
        <Grid container direction="row" spacing={3}>
            {books.map(book => {
                return (
                    <Item key={book._id} book={book}/>
                )
            })}
        </Grid>
    );
}

const Item = ({book}) => {
    return (
      <Grid item xs={12} md={6}>
        <Card>
            <CardHeader
                title={book.name}
                subheader='Written by J. R. R. Tolkien'
            />
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
        </Card>
      </Grid>
    );
}

const Books = () => {
    return (
        <List/>
    );
}

export default Books;