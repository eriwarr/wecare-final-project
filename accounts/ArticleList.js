import { Component } from 'react';
import ArticleDetail from './ArticleDetail';
import Cookies from 'js-cookie';
import './App.css';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      filter: false,
    }
    this.deleteArticle = this.deleteArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/articles/')
    .then(response => response.json())
    .then(data => this.setState({ articles: data }));

  }

  deleteArticle(id) {
    const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
    fetch(`api/v1/articles/${id}/`, options)
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const articles = [ ...this.state.articles];
      const index = articles.findIndex(article => article.id === id);
      articles.splice(index, 1);
      this.setState({articles});
    })
  }

  updateArticle(article){
    const id = article.id;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(article),
    }
    fetch(`/api/v1/articles/${id}/`, options)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok')
        }
        const articles = [ ...this.state.articles];
        const index = articles.findIndex(article => article.id === id);
        articles[index] = article;
        this.setState({ articles });
      });
  }


  filterCategories(event) {

      fetch(`/api/v1/articles/category/?category=${event.target.name}`)
        .then(response => response.json())
        .then(data => this.setState({ articles: data }));

    }

    showAll(){
      fetch('api/v1/articles/')
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));

    }


  render () {
    const articleDisplay = this.state.articles.map((article) => (
    <ArticleDetail key={article.id} article={article} deleteArticle={this.deleteArticle} updateArticle={this.updateArticle} published={article.published}/>
    ));
    return (
      <>
      <div className="container">
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.filterCategories} name="Robotics">Robotics</button>
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.filterCategories} name="Machine Learning">Machine Learning</button>
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.filterCategories} name="Health Care">Health Care</button>
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.filterCategories} name="FinTech">FinTech</button>
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.filterCategories} name="Agritech">Agritech</button>
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.filterCategories} name="Computer Security">Computer Security</button>
            <button className="btn btn-link text-decoration-none nav-btn" onClick={this.showAll} name="Computer Security">ALL</button>
          </nav>
        </div>
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Welcome to my News App!</h1>
          <p className="lead my-3">Hi! My name is Eric. I enjoy all things programming. Have a look around. If you would like to contribute, then sign up and get posting.</p>
          </div>
        </div>
      </div>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            {articleDisplay}
          </div>
          <aside className="col-md-4 blog-sidebar">
            testing
          </aside>
        </div>
      </main>
      </>
    )
  }
}
export default ArticleList;
