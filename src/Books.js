import { Button, Card, CardActions, CardHeader, Grid } from "@material-ui/core";

import Spinner from './components/Spinner';
import useFetch from './hooks/useFetch';

const List = () => {
    const { data: books, isPending, error } = useFetch('https://the-one-api.dev/v2/movie');

    return (
        <Grid container direction="row" spacing={3}>
            {error && <div>{error}</div>}
            {books.map(book => {
                return (
                    <Item key={book._id} book={book}/>
                )
            })}
            {isPending && <Spinner />}
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