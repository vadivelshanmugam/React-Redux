
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIssueList } from './actions';
import IssueList from '../components/IssueList';

const propTypes = {
    fetchIssueList: PropTypes.func,
    fetchIssueStateList: PropTypes.func,
};

class IssueLists extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchIssueList();
    }

    fetchIssueState = params => {
        this.props.fetchIssueStateList(params);
    };

    render() {
        return (
            <IssueList {...this.props.data} {...this.props.data.message} fetchIssueState={this.fetchIssueState} />
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        data: state.gitData
    }
};

/*export const mapStateToProps = createStructuredSelector({
    issueData: makeIssueListSelector(),
});*/

export const matchDispatchToProps = dispatch => {
  return {
    fetchIssueList: () => {
      dispatch(getIssueList());
    },
    fetchIssueStateList: (params) => {
        dispatch(getIssueList(params));
    },
  };
};

IssueLists.propTypes = propTypes;

export default connect(mapStateToProps, matchDispatchToProps)(IssueLists);
