import React, {Component} from 'react';
import SearchForm from './SearchForm';

class Header extends Component{

    render(){
        return (
            <header className="header root__section">
                <h1 className="header__title">Search for books</h1>
                <SearchForm onSubmit={this.props.handleFormSubmit}/>
            </header> 
        );
    }
}

export default Header