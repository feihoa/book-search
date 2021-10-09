import React, {Component} from 'react';
import {connect} from 'react-redux'
import {booksFetchData} from  '../actions/books'
import Header from './Header';
import Main from './Main';


class App extends Component {

  componentDidMount = () =>{
    const search = "js"
    const category = "computers"
    const order = "newest"
  }
  handleGetBooksInfo = (info) =>{
    this.props.fetchData(`https://www.googleapis.com/books/v1/volumes?q="${info.search}"+subject="${info.category}"&orderBy=${info.order}`)
  }

  render(){
    return (
      <>
        <Header onGetBooksInfo={this.handleGetBooksInfo} ></Header>
        <Main books={this.props.books} ></Main>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    books:state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(booksFetchData(url))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
