import React, {Component} from 'react';
import Card from './Card';

class CardsContainer extends Component {

    render(){
console.log(this.props.books)
        return(
            <div className="main__cards-container">
                <div id="booksList" className="books-list root__section">
                    { this.props.books[0] && this.props.books.map((book) => {
                        return  <Card 
                            book={book} 
                            key={book.etag} 
                            onCardClick={this.props.onCardClick} /> 
                    })}
                </div>
            </div> 
        )
        
    }
}

export default CardsContainer