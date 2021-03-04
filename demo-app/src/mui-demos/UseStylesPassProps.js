import React from 'react';
import { makeStyles,createStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//USE STYLES
const useStyles = makeStyles({
    root: {
      background: (props) =>
        props.color === 'red'
          ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: (props) =>
        props.color === 'red'
          ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
          : '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: 8,
    },
  });
  
  function MyButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
  }
  
  //WITH STYLES
  const styles = createStyles({
    root: {
      background: (props) =>
        props.color === 'red'
          ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: (props) =>
        props.color === 'red'
          ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
          : '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: 8,
    },
  });

  function MyButtonRaw(props) {
    const { classes, color, ...other } = props;
    return <Button className={classes.root} {...other} />;
  }
  
  const MyButtonWithStles = withStyles(styles)(MyButtonRaw);

  export default function UseStylesPassProps() {
    return (
      <React.Fragment>
        <MyButton color="red">Red Use Styles</MyButton>
        <MyButton color="blue">Blue Use Styles</MyButton>        
        <MyButtonWithStles color="red">Red With Styles</MyButtonWithStles>
        <MyButtonWithStles color="blue">Blue With Styles</MyButtonWithStles>
      </React.Fragment>
    );
  }