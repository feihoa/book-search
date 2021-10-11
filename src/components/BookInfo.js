import React, {Component} from 'react';

class BookInfo extends Component{
    constructor(props) {
        super(props);
        
        };

    render(){       
        return (
            <div className="book-info">
                <div className="close" onMouseUp={this.props.onClose}>&#10006;</div>
                <div className="book-info__img-container">
                    <img className="book-info__img" src={
                    this.props.book.volumeInfo &&
                    this.props.book.volumeInfo.imageLinks  ? 
                    this.props.book.volumeInfo.imageLinks.thumbnail  : 
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png'} alt="book cover"/>
                </div>
                <div className="book-info__details">
                    <p className="category book-card__category">{
                        this.props.book.volumeInfo.categories ? 
                        this.props.book.volumeInfo.categories.reduce((str, category)=>{return str+', '+category}): 
                        ''
                    }/General
                    </p>
                    <h3 className="book-card__name">{
                        this.props.book.volumeInfo.title}
                    </h3>
                    <p className="book-card__author">{
                        this.props.book.volumeInfo.authors ? 
                        this.props.book.volumeInfo.authors.reduce((str, autor)=>{return str+', '+autor}) : 
                        ''
                    }
                    </p>
                    <textarea className="book-card__description" disabled
                        value={this.props.book.volumeInfo.description ? 
                        this.props.book.volumeInfo.description : 
                        'No description available'
                        } 
                    />
                </div>
            </div>
        )
    }
}
export default BookInfo;