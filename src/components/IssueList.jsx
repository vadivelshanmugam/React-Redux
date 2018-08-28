import React from 'react';
import Image from 'react-image';
import PropTypes from 'prop-types';
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
                        <h3><a href={item.url}>{item.title}</a></h3>
                        <div className="issueSub">{`#`}{item.number} {item.state} {`by`} {item.user.login}</div>
                    </div>
                    {/* <div>{`Comments: `} {item.comments}</div>
                    <div>{item.body}</div> */}
                </div>);
            });
        };

        return <React.Fragment>
            {this.props.data && getIssueCount()}
            <div className="issueList">{this.props.data && getIssueList()}</div>
        </React.Fragment>;
    }
}

IssueList.propTypes = propTypes;

export default IssueList;