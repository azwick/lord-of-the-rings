import { Button, Card, CardActions, CardContent, CardHeader, Chip, Container, Grid } from "@material-ui/core";

import DoneIcon from '@material-ui/icons/Done';
import LaunchIcon from '@material-ui/icons/Launch';
import Pagination from '@material-ui/lab/Pagination';
import Spinner from './components/Spinner';
import useFetch from './hooks/useFetch';

const FilterList = () => {
    // https://lotr.fandom.com/wiki/Category:Characters_by_race

    const handleClick = () => {
        console.log('Clicked!');
    }
    
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}} >
            <Chip style={{ margin: '0 5px'}} icon={<DoneIcon />} label="All" color="primary" clickable onClick={handleClick}/>
            
            <Chip style={{ margin: '0 5px'}} label="Male" clickable color="secondary"/>
            <Chip style={{ margin: '0 5px'}} label="Female" clickable color="secondary" />

            <Chip style={{ margin: '0 5px'}} label="Human" clickable color="secondary" />
            <Chip style={{ margin: '0 5px'}} label="Elves" clickable color="secondary" />
            <Chip style={{ margin: '0 5px'}} label="Half-elven" clickable color="secondary" />
            <Chip style={{ margin: '0 5px'}} label="Dwarves" clickable color="secondary" />
            <Chip style={{ margin: '0 5px'}} label="Hobbits" clickable color="secondary" />
        </Container>
    );
}

const PaginationBar = () => {
    return (
        <Pagination style={{ display: 'flex', justifyContent: 'center', margin: '30px 0'}} count={10} color="primary" />
    )
}

const List = () => {
    const { data: characters, isPending, error } = useFetch('https://the-one-api.dev/v2/character');

    return (
        <Grid container direction="row" spacing={3}>
            {error && <div>{error}</div>}
            {characters.slice(10, 20).map(character => {
                return (
                    <Grid item key={character._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={character.name}
                            />
                            <CardContent>
                                {character.gender && `Gender: ${character.gender}`}<br/>
                                {character.race && `Race: ${character.race}`}<br/>
                                {character.spouse && `Spouse: ${character.spouse}`}
                            </CardContent>
                            <CardActions>
                              <Button href={character.wikiUrl} size="small" color="primary" endIcon={<LaunchIcon/>}>
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

const Characters = () => {
    return (
        <>
            <FilterList/>
            <List/>
            <PaginationBar/>
        </>
    );
}

export default Characters;