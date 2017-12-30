/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import educationalGamesArray from '../components/educationalGamesArray';

import '../css/styles.css';

let searchInput = "", keywordArray = [], keywordCount = 0, tempLetterHolder ="";

class EducationalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 'name': ''}; 
    }


    handleInput(e) {
        if(e.key === 'Enter'){
            console.log('enter press here! ');
        }
        this.setState({
            name: e.target.value
        });
        tempLetterHolder = e.target.value;

        if(tempLetterHolder.length > 9){
            tempLetterHolder = tempLetterHolder.slice(0, -1)
            console.log(e.target.value);
            e.target.value = tempLetterHolder;
            console.log(e.target.value);
            this.setState({
                name: e.target.value
            });
        }

        if(e.target.value === " "){
            e.target.value = "";
            this.setState({
                name: e.target.value
            });
        }
        
        for(let i = 0; i < tempLetterHolder.length; i++){
            if(tempLetterHolder[i] === " "){
                if(tempLetterHolder !== " "){
                    tempLetterHolder = tempLetterHolder.replace(/[^a-z]/gi, '');
                    if(tempLetterHolder !== ""){
                        keywordArray.push(" " + tempLetterHolder);
                        keywordCount++;
                    }
                    e.target.value = "";
                    this.setState({
                        name: e.target.value
                    });
                }
            }
                //everytime  space is pressed
            }
            searchInput = "Searching for games with the keyword(s): " + keywordArray;
        }

    

    render() {
        return (
            <div>
                <div className="search"><input type="text" className="search__form" value={this.state.name} onChange={ (e) => this.handleInput(e) } /></div>
                {searchInput}
            </div>
            );
        }
    }
    
    render(<EducationalSearch />, document.getElementById('root'));
    
    export default EducationalSearch;