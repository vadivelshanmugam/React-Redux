import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Store from './store';
import IssueLists from './containers/IssueList'
import IssueDetails from './containers/IssueDetails/IssueDetails'

import { BrowserRouter, Route, Switch } from 'react-browser-router';


class ReduxedApp  extends React.Component{
    render (){
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={IssueLists} />
                        <Route exact path="/view/:id" component={IssueDetails} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<ReduxedApp />, document.getElementById('root'));
