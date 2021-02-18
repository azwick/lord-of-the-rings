import { Button, Card, CardActions, CardContent, CardHeader, Grid } from "@material-ui/core";
import React, {useEffect, useState} from 'react';

import axios from 'axios';

const token = '9_HW2X8YspdsGcABsncg';

const fetchMovies = async () => {
    const response = await axios.get('https://the-one-api.dev/v2/character', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    return response;
};

const List = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchMovies().then(resp => setCharacters(resp.data.docs));
        fetchMovies().catch((error) => {console.error(error)});
    }, []);

    return (
        <Grid container direction="row" spacing={3}>
            {characters.slice(0, 4).map(character => {
                return (
                    <Grid item key={character._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={character.name}
                            />
                            <CardContent>
                                Gender: {character.gender ? character.gender : '(unknown)'} <br/>
                                Race: {character.race ? character.race : '(unknown)'} <br/>
                                Spouse: {character.spouse ? character.spouse : '(unknown)'} <br/>
                            </CardContent>
                            <CardActions>
                            {/* endIcon={} */}
                              <Button href={character.wikiUrl} size="small" color="primary">
                                Learn More (external)
                              </Button>
                            </CardActions>
                        </Card>
                        {console.log(character)}
                    </Grid>
                )
            })}
        </Grid>
    );
}

const Characters = () => {
    return (
        <List/>
    );
}

export default Characters;