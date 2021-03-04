import React, { useState, useEffect } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function MUIGridDemo() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchData() {
            setUsers(
                await fetch('https://reqres.in/api/users')
                    .then(res => res.json())
                    .then(res => res.data))
        };
        fetchData()
    }, [])

    return (
        <div className="App">
            <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
            <Grid container spacing={10} style={{ padding: 24 }} >
                {users.map(users =>
                    <Grid key={users.id} item
                        xs={12} sm={6} md={4} lg={4} xl={3}
                    >
                        <PplCard
                            key={users.id} email={users.email} firstname={users.first_name}
                            lastname={users.last_name} avatar={users.avatar}
                        />
                    </Grid>)}
            </Grid>
        </div>)
};

const useStyles = makeStyles({
    card: { maxWidth: 345, },
    media: { height: 140, },
});

function PplCard({ email, firstname, lastname, avatar }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={avatar} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstname + " " + lastname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={avatar} size="small" color="primary"> Thumbnail Pic </Button>
            </CardActions>
        </Card>
    );
}