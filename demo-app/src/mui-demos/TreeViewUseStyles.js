import React from 'react';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
// import StyledTreeItem from './StyledTreeItem';


const useStyles = makeStyles({
    treeViewRoot: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
    },
    root: {
        '&:hover': {
            background: 'yellow'
        }
    },
    label: {
        paddingLeft: 20,
    },
    selected: {
        color: 'red'
    }
});


function StyledTreeItem(props) {
    const { classes } = props;
    return <TreeItem {...props} classes={{ label: classes.label }} />
}

const WithStylesTreeItem = withStyles(theme => ({ label: { paddingLeft: 25, color: 'green' } }))(StyledTreeItem);
const WithStylesTreeItemShortHand = withStyles(theme => ({ label: { paddingLeft: 25, color: 'green' } }))(TreeItem);


export default function TreeViewUseStyles() {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.treeViewRoot}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}

        >
            <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
                <TreeItem nodeId="3" label="Chrome" classes={{ label: classes.label }} />
                <WithStylesTreeItem nodeId="4" label="Webstorm" />
                <WithStylesTreeItemShortHand nodeId="5" label="Webstorm Short Hand" />
            </TreeItem>
            <TreeItem classes={{ root: classes.root, selected: classes.selected }} nodeId="5" label="Documents" />

        </TreeView>
    );
}
