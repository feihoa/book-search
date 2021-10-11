import React, {Component} from 'react';

class Card extends Component{

    handleClick = () => {
        this.props.onCardClick(this.props.book);
    }

    render(){       
        return (
            <div className="book-card" id={this.props.book.id} onMouseUp={this.handleClick}>
            <img className="book-card__image" alt="book cover" src={
                this.props.book.volumeInfo &&
                this.props.book.volumeInfo.imageLinks  ? 
                this.props.book.volumeInfo.imageLinks.thumbnail  : 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png'} 
                />
                <div className="book-card__details">
                    <p className="category book-card__category">{
                        this.props.book.volumeInfo.categories ? 
                        this.props.book.volumeInfo.categories[0]: 
                        ''
                    }
                    </p>
                    <h3 className="book-card__name">{this.props.book.volumeInfo.title}</h3>
                    <p className="book-card__author">{
                        this.props.book.volumeInfo.authors ? 
                        this.props.book.volumeInfo.authors.reduce((str, autor)=>{return str + ', ' + autor}) : 
                        ''
                    }
                    </p>
                </div>
            </div>
        )
    }
}
export default Card;