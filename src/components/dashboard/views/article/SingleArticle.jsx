import React from 'react';
import {Field, reduxForm} from 'redux-form'
import DashboardContent from '../../partials/content';
import {getarticlelist, getSingleArticle} from '../../../../Redux/actions/article'
import {connect} from "react-redux";

class SingleArticle extends React.Component {
    state = {
        title: this.props.singlearticle && this.props.singlearticle.title,
        type: this.props.content_type_name && this.props.singlearticle.content_type_name,
        doi: this.props.doi && this.props.singlearticle.doi
    };

    componentWillMount() {
        console.log('In componentWillMount  ==> id', this.props.match.params.id);
        // this.props.dispatch(fetchMoviesByGenre(1, this.props.match.params.id));
        this.props.getSingleArticle(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log('idd', this.props.match.params.id);
            // this.props.dispatch(fetchMoviesByGenre(1, this.props.match.params.id));
            this.props.getSingleArticle(this.props.match.params.id)
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        const useremai = {text: this.state.text};
        this.setState(useremai);
        console.log(useremai)
        // this.props.history.push('/email/addinstitutionsssss')
    };


    componentDidMount() {

    }


    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;
        let singlearticle = this.props.singlearticle
        console.log('In render this . state , ', this.state)

        return (
            <DashboardContent title="Article List">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Article Title</label>
                        <div>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder={singlearticle.title}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Content Type</label>
                        <div>
                            <Field
                                name="content_type"
                                component="input"
                                type="text"
                                value={this.state.content_type_name}
                            />
                        </div>
                    </div>
                    <div>
                        <label>DOI</label>
                        <div>
                            <Field
                                name="doi"
                                component="input"
                                type="email"
                                value={this.state.doi}
                            />
                        </div>
                    </div>



                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>


            </DashboardContent>
        )
    }
}


const mapStateToProps = (state) => ({
    singlearticle: state.articles.singlearticle
});

const mapDispatchToProps = (dispatch) => ({
    getSingleArticle: (id) => dispatch(getSingleArticle(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'simple' // a unique identifier for this form
})(SingleArticle))


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
