import React, {Component} from 'react';
import {connect} from 'react-redux'
import {booksFetchData, toggleIsFetching, changeIsSearched, incrementPageIndex, resetState} from  '../actions/books'
import {changeFormData} from  '../actions/form'
import Header from './Header';
import Main from './Main';


class App extends Component {
  
  constructor(props) {
    super(props);
};

  loadMore = (e) =>{
    console.log(e.target)
    this.props.isFetching(true)
    console.log(this.props.incrementedIndex)
    this.props.fetchData(`https://www.googleapis.com/books/v1/volumes?q="${this.props.changedFormData.search}"+subject="${this.props.changedFormData.category}"&orderBy=${this.props.changedFormData.order}&maxResults=30&startIndex=${this.props.incrementedIndex}`)
    this.props.incrementIndex()
  }

  handleGetBooksInfo = (info) =>{
    this.props.reset()
    this.props.isSearched(true)
    this.props.isFetching(true)
    this.props.fetchData(`https://www.googleapis.com/books/v1/volumes?q="${info.search}"+subject="${info.category}"&orderBy=${info.order}&maxResults=30&startIndex=${0}`)
    this.props.formDataChange(info)
    this.props.incrementIndex()
  }

  render(){
    console.log(this.props)
    console.log("this.props app")

    return (
      <>
        {this.props.isFetch ? 
          <div className="loader-container">
            <div className="loader">Loading...</div>
          </div> : ''
        }
        <Header onGetBooksInfo={this.handleGetBooksInfo} ></Header>
        <Main books={this.props.books} totalItems={this.props.totalItems} 
        isFetching={this.props.isFetch} isSearched={this.props.isSearch} 
        onLoadMoreBtnClick={this.loadMore} index={this.props.incrementedIndex}></Main>

      </>
    )
  }
}

const mapStateToProps = state => {  
console.log(state.books)
console.log("state")
  return {
    books:state.books.books,
    totalItems: state.books.totalBooks,
    isFetch:state.books.isFetching,
    isSearch:state.books.isSearched,
    changedFormData: state.form.data,
    incrementedIndex:state.books.index,
    reset:state.books.reset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(booksFetchData(url)),
    isFetching: isFetching => dispatch(toggleIsFetching(isFetching)),
    isSearched: isSearched => dispatch(changeIsSearched(isSearched)),
    formDataChange: formData => dispatch(changeFormData(formData)),
    incrementIndex: () => dispatch(incrementPageIndex()),
    reset:()=>dispatch(resetState())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
