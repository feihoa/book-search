import React, {Component} from 'react';
import Card from './Card';

class Main extends Component {

    constructor(props) {
        super(props);
    
    };

    render(){
        console.log(this.props.books && this.props.books.length )
        console.log("props main")

        return(
            <>

                {!this.props.isSearched ?
                <div className="main__initial-message"><p>The books found will be displayed here</p></div> :
                !this.props.totalItems ? 
                <h3 className="main__results-not-found">{this.props.totalItems === -1 ? 
                    '' : 
                    'No results found'} </h3> :
                <>
                    <div className="main__cards-container">
                        <h3 className="main__results-found">{this.props.totalItems === -1? '' : `Found ${this.props.totalItems} results`} </h3>
                        <div id="booksList" className="books-list root__section">
                            { this.props.books && this.props.books.map((book) => {
                                return  <Card onCardClick={this.props.onCardClick} book={book} key={book.etag}/> 
                            })}
                        </div>
                    </div> 
                </>
                }
                {this.props.totalItems > 30 && this.props.totalItems > this.props.index ?  
                    <button onMouseUp={this.props.onLoadMoreBtnClick} className="btn main__btn">Load more</button> : ''
                }
            </>
        )
        
    }
}

export default Main