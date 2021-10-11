import React, {Component} from 'react';
import Card from './Card';

class Main extends Component {

    render(){

        return(
            <>
                {
                !this.props.isSearched ?
                <div className="main__initial-message"><p>The books found will be displayed here</p></div> :
                !this.props.totalItems ? 
                <h3 className="main__results-not-found">{'No results found'}</h3> :
                <>
                    <div className="main__cards-container">
                        <h3 className="main__results-found">{this.props.totalItems === -1? 
                        '' : 
                        `Found ${this.props.totalItems} results`} </h3>
                        <div id="booksList" className="books-list root__section">
                            { this.props.books[0] && this.props.books.map((book) => {
                                return  <Card 
                                            book={book} 
                                            key={book.etag} 
                                            onCardClick={this.props.onCardClick} /> 
                            })}
                        </div>
                    </div> 
                </>
                }
                {this.props.totalItems > 30 && this.props.totalItems > this.props.index ?  
                    <button onMouseUp={this.props.onLoadMoreBtnClick} className="btn main__btn">Load more</button> : 
                    ''
                }
            </>
        )
        
    }
}

export default Main