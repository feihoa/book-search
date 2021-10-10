import React, {Component} from 'react';

class Header extends Component{


    constructor(props) {
        super(props);
 

        this.state = {
            bookNameValue: "",
            bookCategoryValue: "all",
            bookSortingValue: "relevance",
        };
    };

    handleChangeBookName = (e) => {
        this.setState({ bookNameValue: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
            // Передаём значения управляемых компонентов во внешний обработчик
                this.props.onGetBooksInfo({
                search: this.state.bookNameValue,
                category: this.state.bookCategoryValue,
                order: this.state.bookSortingValue,
                });
            
    }
    handleChangeBookCategory = (e) => {
        this.setState({ bookCategoryValue: e.target.value });
    }
    handleChangeBookSorting = (e) => {
        this.setState({ bookSortingValue: e.target.value });
    }

    render(){
        return (
            <header className="header root__section">
                <h1 className="header__title">Search for books</h1>
                <form onSubmit={this.handleSubmit} className="header__form" noValidate>
                    <input id="search-input" type="text"
                    value={this.state.bookNameValue} onChange={this.handleChangeBookName} required name="bookName" 
                    className="header__input" placeholder=" Enter the book title"/>
                    <br/>
                    <label className="header__select-label">Categories</label>
                    <select className="header__select" onChange={this.handleChangeBookCategory} value={this.state.bookCategoryValue} name="bookCategory">
                        <option className="header__option"> all</option>
                        <option className="header__option"> art</option>
                        <option className="header__option"> biography</option>
                        <option className="header__option"> computers</option>
                        <option className="header__option"> history</option>
                        <option className="header__option"> medical</option>
                        <option className="header__option"> poetry</option>
                    </select>
                    <label className="header__select-label">Sorting by</label>
                    <select className="header__select" onChange={this.handleChangeBookSorting} value={this.state.bookSortingValue} name="bookSorting">
                        <option className="header__option"> relevance</option>
                        <option className="header__option"> newest</option>
                    </select>
                    <button name="submit" className="btn header__input-btn" type="submit">&#128269;</button>
               </form>
            </header> 
        );
    }
}

export default Header