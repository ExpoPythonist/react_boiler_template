import React from 'react';
import {connect} from "react-redux";

import {Table} from 'reactstrap';
import DashboardContent from '../../partials/content';
import {getarticlelist} from '../../../../Redux/actions/article'

class ArticleList extends React.Component {

    state = {

    }

    componentDidMount() {
        this.props.getarticlelist();

    }
    EditEmail = (id) => {
        this.props.history.push('/article-list/singlearticle/' + id)
      }
    render() {
        console.log(this.props.articles.artclelist.results )
        return (
            <DashboardContent title="Article List">

                <Table striped>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Article title</th>
                        <th>Content Type</th>
                        <th>Article DOI</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.articles.artclelist.results && this.props.articles.artclelist.results.map(item => (
                        <tr>
                            <th scope="row" onClick={()=>this.EditEmail(item.id)}>{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.content_type_name}</td>
                            <td>{item.doi}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>


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