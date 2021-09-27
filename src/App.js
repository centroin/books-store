import React, {useState} from 'react';   
import './App.css';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import List from './components/List.jsx';
import NavComponent from './components/NavComponent/NavComponent';
import authorDetail from './components/Context/AuthorDetail';
import Detail from './components/Detail';

function App() {
  const [authorName, setAuthorName] = useState(false);
  return (
      <authorDetail.Provider value={{authorName, setAuthorName}}>
    <div className="App">
      <Router>
        <NavComponent />
        <Switch>
            <Route  path="/" exact component={Home}/>
            <Route path="/list" component={List} />
            {authorName &&
              <Route path="/detail" component={Detail} />
            }
            }
        </Switch>
      </Router>
    </div>
      </authorDetail.Provider>
  );
}

export default App;
