import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout';


function App() {

    return (
        <div class="main bg-dark">
            <Router>
                <Switch>
                    <Route exact path="/" component={Layout} />
                    <Route path="/:project" component={Layout} />	
                </Switch>
            </Router>
        </div>
    );
}

export default App;



