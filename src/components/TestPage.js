import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from "./Sidebar";
import TestBody from './TestBody';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './css/theme';

export default function TestPage() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container component="main">
      <div className={classes.root}>
        <Sidebar classes={classes} theme={theme} />
        <TestBody />
      </div>
    </Container>
  );
}