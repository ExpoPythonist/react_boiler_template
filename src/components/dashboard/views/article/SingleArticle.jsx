import React from 'react';
import {Table} from 'reactstrap';
import DashboardContent from '../../partials/content';
import {getarticlelist} from '../../../../Redux/actions/article'
import {connect} from "react-redux";

class SingleArticle extends React.Component {
    state = {
        text: '',
      }
      componentWillMount() {
        console.log('id',this.props.match.params.id)
        // this.props.dispatch(fetchMoviesByGenre(1, this.props.match.params.id));
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
          console.log('idd',this.props.match.params.id)
          // this.props.dispatch(fetchMoviesByGenre(1, this.props.match.params.id));
        }
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      onSubmitHandler = (e) => {
        e.preventDefault();
        const useremai = { text: this.state.text }
        this.setState(useremai)
        console.log(useremai)
        // this.props.history.push('/email/addinstitutionsssss')
      }
    

    componentDidMount() {
        this.props.getarticlelist();

    }

    render() {
        // console.log(this.props.articles.artclelist.results )
        return (
            <DashboardContent title="Article List">
        <div className={`col-sm-12 bg-white alert`} >
          <input type="text" onChange={this.handleChange} name="name" value={this.state.text}/>

          <div className="modal-footer boder-remove ">
            <button type="button" className="btn btn-info"
              onClick={
                this.onSubmitHandler}
            >Create Email</button>
          </div>
        </div>



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

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);