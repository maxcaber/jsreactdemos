import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import PropTypes from "prop-types";

function StyledTreeItem(props) {
    const { classes } = props;
    return <TreeItem {...props} classes={{ label: classes.label }} />
}

StyledTreeItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(theme => ({ label: { paddingLeft: 25, color: 'green' } }))(StyledTreeItem);