import { Button, Card, CardActions, CardHeader, Grid } from "@material-ui/core";

import Spinner from './components/Spinner';
import useFetch from './hooks/useFetch';

const List = () => {
    const { data: movies, isPending, error } = useFetch('https://the-one-api.dev/v2/movie');

    return (
        <Grid container direction="row" spacing={3}>
            {error && <div>{error}</div>}
            {movies.map(movie => {
                return (
                    <Grid item key={movie._id} xs={12} md={4}>
                        <Card>
                            <CardHeader
                                title={movie.name}
                            />
                            <CardActions>
                              <Button size="small" color="primary">
                                Learn More
                              </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
            {isPending && <Spinner />}
        </Grid>
    );
}

const Movies = () => {
    return (
        <List/>
    );
}

export default Movies;