import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-browser-router";
import { isArray } from 'lodash/fp';

import '../../src/App.css';
import './IssueList.css';
import Icons from '../svg';

const propTypes = {
    fetchIssueList: PropTypes.func,
    fetchIssueState: PropTypes.func,
}

class IssueList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderState: "open"
        }
    }
    componentDidMount() {
        this.props.fetchIssueState(this.state.orderState);
    }
    selectState = e => {
        this.setState({ orderState: e.target.value })
        this.props.fetchIssueState(e.target.value);
    }
    getIssueCount = () => {
        return <React.Fragment>
            <div className="headingBlock relative">
                <h2 className="heading"><Icons width={16} height={16} fill="#000" className="imgSvg" /> {`Issues ${this.props.data.length}`}</h2>
                <select onChange={this.selectState}>
                    <option value="open">Opened</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
            </React.Fragment>;
    };
    getIssueList = () => {
        return this.props.data.map((item, index) => {
          return (<div key={index} data={item} className="issueItem">
                <Icons width={16} height={16} fill={item.state === "open" ? "#28a745" : "#bd2c00"} className="imgSvg" />
                <div className="issueDetails">
                    <h3><Link to={"/view/" + item.number}>{item.title}</Link></h3>
                    <div className="issueSub">{`#`}{item.number} {item.state} {`by`} {item.user.login}</div>
                </div>
            </div>);
        });
    };
    getEmptyAPIMessage = () => {
        return <div className="noComment">{this.props.data.message}</div>;
    }
    render() {
        return <React.Fragment>
            <header className="App-header">
                <h1 className="App-title">facebook/create-react-app</h1>
            </header>
            {!isArray(this.props.data) && this.props.data && this.getEmptyAPIMessage()}
            {isArray(this.props.data) &&
                <div className="pageContainer">
                    {isArray(this.props.data) && this.getIssueCount()}
                    <div className="issueList">{isArray(this.props.data) && this.getIssueList()}</div>
                </div>
            }
        </React.Fragment>;
    }
}

IssueList.propTypes = propTypes;

export default IssueList;