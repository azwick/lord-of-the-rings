import { Button, Card, CardActions, CardHeader, Grid } from "@material-ui/core";
import React, {useEffect, useState} from 'react';

import axios from 'axios';

const token = '9_HW2X8YspdsGcABsncg';

const fetchMovies = async () => {
    const response = await axios.get('https://the-one-api.dev/v2/movie', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    return response;
};

const List = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies().then(resp => setMovies(resp.data.docs));
        fetchMovies().catch((error) => {console.error(error)});
    }, []);

    return (
        <Grid container direction="row" spacing={3}>
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
                        {console.log(movie)}
                    </Grid>
                )
            })}
        </Grid>
    );
}

const Movies = () => {
    return (
        <List/>
    );
}

export default Movies;