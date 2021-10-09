import React, {Component} from 'react';
import {connect} from 'react-redux'
import {booksFetchData, toggleIsFetching, changeIsSearched} from  '../actions/books'
import Header from './Header';
import Main from './Main';


class App extends Component {
  
  constructor(props) {
    super(props);

};
  loadMore = (e) =>{
    console.log(e.target)
    
  }

  handleGetBooksInfo = (info) =>{
    this.props.isSearched(true)
    this.props.isFetching(true)
    let startIndex=0
    this.props.fetchData(`https://www.googleapis.com/books/v1/volumes?q="${info.search}"+subject="${info.category}"&orderBy=${info.order}&maxResults=30&startIndex=${startIndex}`)
  }

  render(){
    console.log(this.props)

    return (
      <>
        <Header onGetBooksInfo={this.handleGetBooksInfo} ></Header>
        <Main books={this.props.books} isFetching={this.props.isFetch} isSearched={this.props.isSearch} onLoadMoreBtnClick={this.loadMore}></Main>

      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.books)
  console.log("state")
  return {
    books:state.books.books,
    isFetch:state.books.isFetching,
    isSearch:state.books.isSearched,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(booksFetchData(url)),
    isFetching: isFetching => dispatch(toggleIsFetching(isFetching)),
    isSearched: isSearched => dispatch(changeIsSearched(isSearched)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
