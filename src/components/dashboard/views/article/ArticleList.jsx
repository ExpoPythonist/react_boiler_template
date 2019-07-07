import React from 'react';
import DashboardContent from '../../partials/content';
import { getarticlelist } from '../../../../Redux/actions/article'
import { connect } from "react-redux";

class ArticleList extends React.Component {

    componentDidMount() {
        this.props.getarticlelist();

    }

    render() {
        console.log(this.props.articles.artclelist.actions)
        return (
            <DashboardContent title="Article List">
                All List of Article
                {this.props.articles.artclelist.actions && this.props.articles.artclelist.actions.map(item => (
                    <ul key={item.label}><li key={item.label}>{item.label}</li></ul>
                ))}
            </DashboardContent>
        )
    }
}





const mapStateToProps = (state) => ({
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    getarticlelist: () => dispatch(getarticlelist())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);