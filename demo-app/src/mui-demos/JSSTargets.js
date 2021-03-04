import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    dangerStyle: {
        fontWeight: "normal",
        color: "#FF0000",
        "h6 &": {
            color: "#00FF00",
            fontWeight: "bold",
            fontSize: 24
        }
    },
    nestedDemo: {
        color: 'red',
        '&  p': {
            margin: 0,
            color: 'green',
            '& span': {
                color: 'blue',
            },
        },
    },
});

function Danger(props) {
    const { children } = props;
    const classes = useStyles();
    return <div className={classes.dangerStyle}>{children}</div>;
}

function NestedStylesHook() {
    const classes = useStyles();
  
    return (
      <div className={classes.nestedDemo}>
        This is red since it is inside the root nestedDemo.
        <p>
          This is green since it is inside the paragraph{' '}
          <span>and this is blue since it is inside the span</span>
        </p>
      </div>
    );
  }

export default function JSSTargets() {
    return (
        <div className="App">
            <Danger>Danger not in h6</Danger>
            <h6>
                <Danger>Danger in h6</Danger>
            </h6>
            <NestedStylesHook />
        </div>
    );
}
