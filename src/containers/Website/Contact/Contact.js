import React from 'react';
import contactStyles from './Contact.module.css';
import SocialFollow from '../../../components/SocialFollow'
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    toolbar: theme.mixins.toolbar
  });

const Contact = (props) => {
    const { classes } = props;
    return (
        <div className={contactStyles.contact}>
            <div className={classes.toolbar} />
            <Typography variant="h2" color="primary">Want to collaborate? Hire me? Have questions?</Typography>
            <SocialFollow className={styles.social}/>
        </div>
    )
};

export default withStyles(styles)(Contact);