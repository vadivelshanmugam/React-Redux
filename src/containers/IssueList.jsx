
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIssueList } from './actions';
import IssueList from '../components/IssueList';

const propTypes = {
    fetchIssueList: PropTypes.func,
};

class IssueLists extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchIssueList();
    }

    render() {
        return (
            <IssueList {...this.props.data} />
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        data: state
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
  };
};

IssueLists.propTypes = propTypes;

export default connect(mapStateToProps, matchDispatchToProps)(IssueLists);
