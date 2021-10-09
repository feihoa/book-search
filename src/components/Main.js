import React, {Component} from 'react';
import Card from './Card';

class Main extends Component {

    constructor(props) {
        super(props);

    };

    render(){

        return(
            <>
            <div className="main__cards-container">
                <h3 className="main__results-found">Found {this.props.books.totalItems} results</h3>
                <div id="booksList" className="books-list root__section">
                    {this.props.books.length !== 0 && this.props.books.items.map((book) => {
                        return  <Card onCardClick={this.props.onCardClick} book={book} key={book.id}/> 
                    })}
                </div>
            </div>
            </>
        )
    }
}

export default Main