import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import firebase from './firebase';
import './App.css';
import { AppBar, Typography } from '@material-ui/core';

import NavBar from './components/nav-bar';
import Login from './components/login';
import User from './components/user';
import Board from './components/board';

// const listNames = {
//   WENT_WELL: 'went-well',
//   TO_IMPROVE: 'to-improve',
//   ACTION_ITEMS: 'action-items',
// };

function App() {
  // const [wentWell, setWentWell] = useState([]);
  // const [toImprove, setToImprove] = useState([]);
  // const [actionItems, setActionItems] = useState([]);

  // useEffect(() => {
  //   const fetchData = async (listName) => {
  //     try {
  //       const querySnapshot = await firebase
  //         .firestore()
  //         .collection('retro-items')
  //         .where('list', '==', listNames[listName])
  //         .get();

  //       const dataArray = [];

  //       await querySnapshot.forEach(async (doc) => {
  //         await dataArray.push({
  //           ...doc.data(),
  //           id: doc.id,
  //         });
  //       });

  //       switch (listNames[listName]) {
  //         case listNames.WENT_WELL:
  //           setWentWell(dataArray);
  //           break;
  //         case listNames.TO_IMPROVE:
  //           setToImprove(dataArray);
  //           break;
  //         case listNames.ACTION_ITEMS:
  //           setActionItems(dataArray);
  //           break;
  //         default:
  //           break;
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData('WENT_WELL');
  //   fetchData('TO_IMPROVE');
  //   fetchData('ACTION_ITEMS');
  // }, []);

  // console.log(wentWell);
  // console.log(toImprove);
  // console.log(actionItems);

  // const renderListItem = (item) => <li key={item.id}>{item.content}</li>;

  return (
    <div className='App'>
      <Router>
        <Route>
          <NavBar />
        </Route>
        <Switch>
          {/* <Route path='/'>
            <Redirect to='/login' />
          </Route> */}
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/board'>
            <Board />
          </Route>
          {/* <Route path='/:user'>{(user) => <User user={user} />}</Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
