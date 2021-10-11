import React, {Component} from 'react';
import {connect} from 'react-redux'
import {categoryOptionsList, orderOptionsList} from './consts';
import {formChangeBookSearchValue, formChangeBookCategoryValue, formChangeBookSortingValue} from  '../redux/actions/form';

class SearchForm extends Component{

    handleChangeBookName = (e) => {
        this.props.bookSearchValueChange(e.target.value);
    }
    handleChangeBookCategory = (e) => {
        this.props.bookCategoryValueChange(e.target.value);
    }
    handleChangeBookSorting = (e) => {
        this.props.bookSortingValueChange(e.target.value);
    }

    render(){
        return (
                <form className="header__form" noValidate onSubmit={this.props.onSubmit} >
                    <input className="header__input" type="text" name="bookName" placeholder="Enter the book title"
                        value={this.props.bookSearchValue} 
                        onChange={this.handleChangeBookName}/>

                    <br/>

                    <label className="header__select-label">Categories</label>
                    <select className="header__select" name="bookCategory"
                        value={this.props.bookCategoryValue} 
                        onChange={this.handleChangeBookCategory}>
                        {categoryOptionsList.map(option => (
                            <option value={option.value} key={option.value}>{option.value}</option>
                        ))}
                    </select>

                    <label className="header__select-label">Sorting by</label>
                    <select className="header__select" name="bookSorting" 
                        value={this.props.bookSortingValue} 
                        onChange={this.handleChangeBookSorting}>
                        {orderOptionsList.map(option => (
                            <option value={option.value} key={option.value}>{option.value}</option>
                        ))}
                    </select>
                    <button className="btn header__input-btn" type="submit" name="submit">&#128269;</button>
               </form>
        );
    }

}

const mapStateToProps = state => {  
    console.log(state)
    console.log("state search form")
      return {
        bookSearchValue: state.form.bookSearchValue,
        bookCategoryValue: state.form.bookCategoryValue,
        bookSortingValue: state.form.bookSortingValue,
      };
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        bookSearchValueChange: data => dispatch(formChangeBookSearchValue(data)),
        bookCategoryValueChange: data => dispatch(formChangeBookCategoryValue(data)),
        bookSortingValueChange: data => dispatch(formChangeBookSortingValue(data)),
      };
    };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)

