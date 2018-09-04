import React from 'react';
import Image from 'react-image';
import PropTypes from 'prop-types';
import '../IssueList.css';
import Icons from '../../svg';

const propTypes = {
    fetchIssueDetails: PropTypes.func,
}

class IssueDetail extends React.Component {
    constructor(props){
        super(props);
    }
    getCommentList = () => {
        return this.props.comments.map((item, index) => {
          return (<div key={index} data={item}>
                <div class="col1"><Image src={item.user.avatar_url} className="avatarImg" /></div>
                    <div class="col11">
                        <div className="pageContainer">
                            <div className="headingBlock">
                                <div className="heading">
                                    <span className="pageSubHeading boldTxt clr3">{item.user.login}</span> {item.state} {`this issue on `} {item.updated_at}
                                </div>
                            </div>
                            <div className="issueItem">{item.body}</div>
                        </div>
                    </div>
            </div>);
        });
    };
    getCommentEmpty = () => {
        return <div className="noComment">No comments !!!</div>;
    }
    render() {
        return <React.Fragment>
            {this.props.detail && 
                <div>
                    <div className="pageHeading">
                        <h2 className="clr1">{this.props.detail.title} - <span className="fontLight clr2">{`#`}{this.props.detail.number}</span></h2>
                        <div><span className="pageSubHeading boldTxt clr3"><span className={this.props.detail.state === "open" ? "stateOpen" : "stateClose"}><Icons width={16} height={16} fill="#fff" className="whiteInfo" /> {this.props.detail.state}</span> {this.props.detail.user.login}</span> {this.props.detail.state} {`this issue on `} {this.props.detail.updated_at} {this.props.detail.comments === undefined && `| ${this.props.detail.comments} comment`}</div>
                    </div>
                    {(this.props.comments && this.props.comments.length === 0) ? this.getCommentEmpty() : ''}
                    {this.props.comments && this.getCommentList()}
                </div>
            }
        </React.Fragment>;
    }
}

IssueDetail.propTypes = propTypes;

export default IssueDetail;