import React from 'react';
import DashboardContent from '../../partials/content';
import { getarticlelist } from '../../../../Redux/actions/article'
import { connect } from "react-redux";

class ArticleList extends React.Component {

    componentDidMount() {
        this.props.dispatch(getarticlelist());

    }

    render() {
        return (
            <DashboardContent title="Article List">
                All List of Article
                {this.props.articles.map(item => item.name)}
            </DashboardContent>
        )
    }
}





const mapStateToProps = (state) => ({
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    // fetchLoginUser: (data) => dispatch(fetchLoginUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);