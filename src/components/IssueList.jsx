import React from 'react';
import Image from 'react-image';
import PropTypes from 'prop-types';
import { Link } from "react-browser-router";

import './IssueList.css';
import iIcon from '../icons/notificationAlert.svg';

const propTypes = {
    fetchIssueList: PropTypes.func,
}

class IssueList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const getIssueCount = () => {
            return <React.Fragment><h2 className="heading"><Image src={iIcon} width={16} height={16}/> {`Issues ${this.props.data.length}`}</h2></React.Fragment>;
        };

        const getIssueList = () => {
            return this.props.data.map((item, index) => {
              return (<div key={index} data={item} className="issueItem">
                    <Image src={iIcon} width={16} height={16}/>
                    <div className="issueDetails">
                        <h3><Link to={"/view/" + item.number}>{item.title}</Link></h3>
                        <div className="issueSub">{`#`}{item.number} {item.state} {`by`} {item.user.login}</div>
                    </div>
                    {/* <div>{`Comments: `} {item.comments}</div>
                    <div>{item.body}</div> */}
                </div>);
            });
        };

        return <React.Fragment>
            <header className="App-header">
                <h1 className="App-title">facebook/create-react-app</h1>
            </header>
            <div className="pageContainer">
                {this.props.data && getIssueCount()}
                <div className="issueList">{this.props.data && getIssueList()}</div>
            </div>
        </React.Fragment>;
    }
}

IssueList.propTypes = propTypes;

export default IssueList;