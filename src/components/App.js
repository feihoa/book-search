import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import {
  booksFetchData, 
  toggleIsFetching, 
  changeIsSearched, 
  incrementPageIndex, 
  resetState
} from  '../redux/actions/books'
import {
  formChangeBookSearchValue, 
  formChangeBookCategoryValue, 
  formChangeBookSortingValue
} from  '../redux/actions/form';
import {setCardData} from  '../redux/actions/card';

import Header from './Header';
import Main from './Main';
import BookInfo from './BookInfo';


class App extends Component {

  clearRequest(req){
     // eslint-disable-next-line
    return (req.replace(/[<>\/#$%\^\*;{}=\_`~+&]/g," ")).trim();
  }

  fetchBooks = (data) => {
    this.props.fetchData(`https://www.googleapis.com/books/v1/volumes?q="${data.search}"+subject="${data.category}"&orderBy=${data.order}&maxResults=30&startIndex=${data.index}`)
  }

  loadMore = () =>{
    this.props.isFetching(true)
    this.fetchBooks({
      search: this.props.bookSearchValue, 
      category: this.props.bookCategoryValue, 
      order: this.props.bookSortingValue, 
      index: this.props.incrementedIndex});
    this.props.incrementIndex()
  }

  submitSearchForm = (e) =>{
    e.preventDefault()
    //сброс состояния для полной перезаписи массива книг
    this.props.reset()
    
    this.props.history.push('/')
    this.props.isSearched(true)
    this.props.isFetching(true)
    this.fetchBooks({
      search: this.clearRequest(this.props.bookSearchValue), 
      category: this.props.bookCategoryValue, 
      order: this.props.bookSortingValue, 
      index: 0});
    this.props.incrementIndex()
  }

  handleCardClick = (card) => {
    this.props.setCardData(card);
    this.currentBookId = card.etag
    this.props.history.push("/book/:" + this.currentBookId)
    }
  handleClose = () => {
    this.props.history.push('/')
  }

  render(){
    const { history } = this.props

    return (
      <div className="App">
        {this.props.isFetch ? 
        // Loader
          <div className="loader-container">
            <div className="loader">Loading...</div>
          </div> : 
          ''
        }
        <Header handleFormSubmit={this.submitSearchForm} />
        <Switch>

          <Route history={history} exact path="/">
            <Main               
              isSearched={this.props.isSearch} 
              isFetching={this.props.isFetch} 
              err={this.props.fetchErrMessage}
              totalItems={this.props.totalItems} 
              books={this.props.books} 
              index={this.props.incrementedIndex} 
              onLoadMoreBtnClick={this.loadMore} 
              onCardClick={this.handleCardClick}/> 
          </Route>

          <Route history={history} exact path={"/book/:" + this.currentBookId}>
            {this.props.card.card.length !== 0 ? 
              <BookInfo book={this.props.card.card} onClose={this.handleClose}/> :
              <Redirect to="/" />
            }
          </Route>

          <Route history={history} path="*">
            <Redirect to="/" />
          </Route>

        </Switch>
      </div>

    )
  }
}

const mapStateToProps = state => {  
  return {
    isSearch: state.books.isSearched,
    isFetch: state.books.isFetching,
    totalItems: state.books.totalBooks,
    books: state.books.books,
    incrementedIndex: state.books.index,
    reset: state.books.reset,
    fetchErrMessage: state.books.err.message,

    bookSearchValue: state.form.bookSearchValue,
    bookCategoryValue: state.form.bookCategoryValue,
    bookSortingValue: state.form.bookSortingValue,

    card: state.card,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isSearched: isSearched => dispatch(changeIsSearched(isSearched)),
    fetchData: url => dispatch(booksFetchData(url)),
    isFetching: isFetching => dispatch(toggleIsFetching(isFetching)),
    incrementIndex: () => dispatch(incrementPageIndex()),
    reset: () => dispatch(resetState()),

    bookSearchValueChange: data => dispatch(formChangeBookSearchValue(data)),
    bookCategoryValueChange: data => dispatch(formChangeBookCategoryValue(data)),
    bookSortingValueChange: data => dispatch(formChangeBookSortingValue(data)),

    setCardData: card => dispatch(setCardData(card)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
