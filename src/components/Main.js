import React, {Component} from 'react';
import CardsContainer from './CardsContainer';

class Main extends Component {

    render(){
        return(
            <>
                <h3 className="main__message">{           
                    !this.props.isSearched ?
                    'The books found will be displayed here' :
                    this.props.err ?
                    this.props.err :
                    !this.props.totalItems ? 
                    'No results found' :
                    this.props.totalItems === -1 ?
                    '':
                    `Found ${this.props.totalItems} results` 
                }</h3>
                
                <CardsContainer {...this.props}/>  
                
                {this.props.totalItems > 30 && this.props.totalItems > this.props.index ?  
                <button onMouseUp={this.props.onLoadMoreBtnClick} className="btn main__btn">Load more</button> : 
                ''
                }
            </>
        )
    }
}

export default Main