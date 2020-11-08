import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AuthService from '../services/AuthService';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData : {}
    }
  }

  componentDidMount(){
    AuthService.getAllUser().then(users => {
       if(Object.entries(users).length !== 0) {
        this.setState({
          userData : users
        });
      }
    })   
  }

  render() {
    let rows = this.state.userData;   
    // console.log(rows); 
    console.log(Object.entries(rows).length);
    let tblRows = <TableRow></TableRow>;
    if(Object.entries(rows).length !== 0) {
        tblRows = rows.map((row, i) => (          
          <TableRow key={i}>
            <TableCell component="th" scope="row">
              {i + 1}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.mobile}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.created_at}</TableCell>
          </TableRow>
        ))
    }
    return (      
      <TableBody>
        {tblRows}
      </TableBody>
    );
  }
}

export default Users;