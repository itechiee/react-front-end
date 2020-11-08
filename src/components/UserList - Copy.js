// import React from 'react';
// import useStyles from './css/theme';
// // import '../assets/css/style.css';
// import Sidebar from "./Sidebar";
// import Users from './Users';
// import Container from '@material-ui/core/Container';

// export default function UserList() {
//   const classes = useStyles();
//   return (
//     <Container component="main">
//           <Sidebar />
//           <Users />
//       </Container>
//   );
// }

import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from "./Sidebar";
import Users from './Users';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <Container component="main">
          <Sidebar />
          <Users />
      </Container>
    )
  }
     
}

export default UserList;