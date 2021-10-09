import React, {Component} from 'react';
import Card from './Card';

class Main extends Component {

    constructor(props) {
        super(props);
    
    };

    render(){
        console.log(this.props)

        return(
            <>
                {!this.props.isSearched ?
                <div className="main__initial-message"><p>The books found will be displayed here</p></div> :
                this.props.isFetching ? 
                <div className="loader">Loading...</div> :
                <>
                    <div className="main__cards-container">
                        <h3 className="main__results-found">{this.props.books.totalItems ? `Found ${this.props.books.totalItems} results` : 'No results found'} </h3>
                        <div id="booksList" className="books-list root__section">
                            {this.props.books.items && this.props.books.items.map((book) => {
                                return  <Card onCardClick={this.props.onCardClick} book={book} key={book.id}/> 
                            })}
                        </div>
                    </div> 
                    {this.props.books.totalItems ? 
                        <button onMouseUp={this.props.onLoadMoreBtnClick} className="btn main__btn">Load more</button> : ''
                    }
                </>
                }
            </>
        )
        
    }
}

export default Main