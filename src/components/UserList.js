import React from "react";
import Container from "@material-ui/core/Container";
import Sidebar from "./Sidebar";
import Users from './Users';
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./css/theme";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


export default function UserList() {
  const classes = useStyles();
  const theme = useTheme();
  // console.log('UserList');
  return (
    <Container component="main">
      <div className={classes.root}>
        <Sidebar classes={classes} theme={theme} />
        {/* <Users /> */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Mobile</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Created At</TableCell>
                </TableRow>
              </TableHead>
              
              <Users />
              {/* <TableBody>
              <TableRow key="test">
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell align="right">test</TableCell>
                <TableCell align="right">test</TableCell>
                <TableCell align="right">test</TableCell>
                <TableCell align="right">test</TableCell>
              </TableRow>
            </TableBody> */}
              
            </Table>
          </TableContainer>
        </main>
      </div>
    </Container>
  );
}
