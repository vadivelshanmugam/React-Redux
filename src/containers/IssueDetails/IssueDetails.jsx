
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIssueDetails } from './actions';
import IssueDetail from '../../components/IssueDetail/IssueDetail';

const propTypes = {
    fetchIssueDetails: PropTypes.func,
};

class IssueDetails extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const ids = this.props.match.params.id;
        this.props.fetchIssueDetails(ids);
    }

    render() {
        return (
            <IssueDetail {...this.props.detail} />
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        detail: state.gitDetail
    }
};

/*export const mapStateToProps = createStructuredSelector({
    issueData: makeIssueDetailsSelector(),
});*/

export const matchDispatchToProps = dispatch => {
  return {
    fetchIssueDetails: (params) => {
      dispatch(getIssueDetails(params));
    },
  };
};

IssueDetails.propTypes = propTypes;

export default connect(mapStateToProps, matchDispatchToProps)(IssueDetails);
