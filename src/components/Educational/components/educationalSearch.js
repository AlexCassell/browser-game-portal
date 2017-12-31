/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import educationalGamesArray from '../components/educationalGamesArray';

import '../css/styles.css';

let searchInput = "", keywordArray = [], keywordCount = 0, tempLetterHolder ="", searchText=<div className="search__keywords">{searchInput}<span className="keywordArray">{keywordArray}</span></div>;

class EducationalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 'name': ''};
    }



    handleInput(e) {
        this.immediateSearch(e);
        this.keywords(e);
        }
    
    immediateSearch(e){
        for(let s = 0; s < educationalGamesArray.length; s++){
            for(let se = 0; se < educationalGamesArray[s].length; se++)
            if(educationalGamesArray[s][se].includes(e.target.value)){
                console.log("Name of Game: " + educationalGamesArray[s][0]);
            }
        }
    }

    keywords(e){
        this.setState({
            name: e.target.value
        });
        tempLetterHolder = e.target.value;

        if(tempLetterHolder.length > 9){
            tempLetterHolder = tempLetterHolder.replace(/[^a-z]/gi, '');
            if(tempLetterHolder !== ""){
                if(keywordCount === 6){
                    keywordArray.splice(0, 1);
                    keywordArray[0] = keywordArray[0].replace(/[^a-z]/gi, '');
                }
                else{
                    keywordCount++;
                }
                if(keywordCount === 1){
                    keywordArray.push(tempLetterHolder);
                }
                else{
                    keywordArray.push(", " + tempLetterHolder);
                }
                e.target.value = "";
            }
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
                        if(keywordCount === 6){
                            keywordArray.splice(0, 1);
                            keywordArray[0] = keywordArray[0].replace(/[^a-z]/gi, '');
                        }
                        else{
                            keywordCount++;
                        }
                        if(keywordCount === 1){
                            keywordArray.push(tempLetterHolder);
                        }
                        else{
                            keywordArray.push(", " + tempLetterHolder);
                        }
                        
                        
                    }
                    e.target.value = "";
                    this.setState({
                        name: e.target.value
                    });
                }
            }
            }
            if(keywordCount > 1){
                searchInput = "Searching for games with the keywords: ";
            }
            else if(keywordCount === 1) {
                searchInput = "Searching for games with the keyword: ";
            }
            else if(keywordCount === 0) {
                searchInput = "";
            }
    }


    

    render() {
        return (
            <div>
                <div className="search"><input type="text" className="search__form" value={this.state.name} onChange={ (e) => this.handleInput(e) } /></div>
                <div className="search__keywords">{searchInput}<span className="keywordArray">{keywordArray}</span></div>
            </div>
            );
        }
    }
    
    render(<EducationalSearch />, document.getElementById('root'));
    
    export default EducationalSearch;