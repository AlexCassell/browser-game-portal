/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import educationalGamesArray from '../components/educationalGamesArray';

import '../css/styles.css';

let searchInput = "", keywordArray = [], keywordButtonArray = [], keywordCount = 0, tempLetterHolder ="", searchText=<div className="search__keywords">{searchInput}<span className="keywordArray">{keywordArray}</span></div>;

class EducationalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 'name': ''};
        this.state = { 'screenUpdate': ''};
    }



    handleInput(e) {
        // this.immediateSearch(e);
        this.keywords(e);
        }
    
    // immediateSearch(e){
    //     for(let s = 0; s < educationalGamesArray.length; s++){
    //         for(let se = 0; se < educationalGamesArray[s].length; se++){
    //             // console.log(educationalGamesArray[s][se] + " e: " + e.target.value);
    //         if(educationalGamesArray[s][se].replace(/[^a-z]/gi, '').includes(e.target.value)){
    //             console.log("Name of Game: " + educationalGamesArray[s][0]);
    //         }
    //     }
    //     }
    //     this.keywordsSearch(e);
    // }

    keywordsSearch(e){
        let gameArray = [];
        for(let i = 0;i < keywordArray.length; i++){
            for(let x = 0;x < educationalGamesArray.length; x++){
                for(let z = 0; z < educationalGamesArray[x].length; z++){
                    if(educationalGamesArray[x][z].replace(/[^a-z]/gi, '').includes(keywordArray[i].slice(0, 4))){
                        gameArray.push(educationalGamesArray[x][0]);
                    }
                }
            }
        }
        this.removeDuplicates(gameArray);
    }

    removeDuplicates(gameArray){
        for(let i = 0; i < gameArray.length; i++){
            console.log(gameArray);
            for(let x = 0; x < gameArray.length; x++){
                if(gameArray[i] === gameArray[x] && x !== i){
                    gameArray.splice(x, 1);
                }
            }
        }
        // console.log(gameArray);
    }

    keywords(e){
        if(e.target.value === ""){
            this.deleteKeyword(e);
        }
        this.setState({
            name: e.target.value
        });
        tempLetterHolder = e.target.value;
        if(tempLetterHolder.length > 9){   
            tempLetterHolder = tempLetterHolder.replace(/[^a-z]/gi, ''); 
            if(tempLetterHolder !== ""){     
                keywordCount++;
                // if(keywordCount === 6){
                //     keywordArray.splice(0, 1);
                //     keywordArray[0] = keywordArray[0].replace(/[^a-z]/gi, '');
                // }
                // else{
                //     keywordCount++;
                //     return;
                // }
                if(keywordCount === 1){         
                    keywordArray.push(tempLetterHolder);
                    keywordButtonArray.push(<button className="buttons__keywords" onClick={this.deleteKeywordOnClick.bind(this, keywordCount)}>{tempLetterHolder}</button>);
                }
                else{
                    keywordArray.push(tempLetterHolder);
                    keywordButtonArray.push(<button className="buttons__keywords" onClick={this.deleteKeywordOnClick.bind(this, keywordCount)}>{tempLetterHolder}</button>);
                } 
                e.target.value = " ";
            }
            this.setState({
                name: e.target.value
            });
        }

        // if(e.target.value === " "){
        //     e.target.value = "";
        //     this.setState({
        //         name: e.target.value
        //     });
        // }
        
        for(let i = 1; i < tempLetterHolder.length; i++){
            if(tempLetterHolder[i] === " "){
                if(tempLetterHolder !== " "){
                    tempLetterHolder = tempLetterHolder.replace(/[^a-z]/gi, '');
                    if(tempLetterHolder !== ""){
                        if(keywordCount === 10){
                            return;
                            // keywordArray.splice(0, 1);
                            // keywordArray[0] = keywordArray[0].replace(/[^a-z]/gi, '');
                            // keywordCount--;
                        }
                        else{
                            keywordCount++;
                        }
                        keywordArray.push(tempLetterHolder);
                        keywordButtonArray.push(<button className="buttons__keywords" onClick={this.deleteKeywordOnClick.bind(this, keywordCount)}>{tempLetterHolder}</button>);
                        }
                    }
                    e.target.value = " ";
                    this.setState({
                        name: e.target.value
                    });
                }
            }
    
            if(keywordCount > 1){
                searchInput = "Searching for games with the keywords: ";
            }
            else if(keywordCount === 1) {
                searchInput = "Searching for games with the keyword: ";
            }
            this.keywordsSearch(e);
    
    }

    deleteKeywordOnClick(keywordCount){//Needs a series of if statements to keep track of buttons still on screen
        console.log(keywordCount + " " + keywordButtonArray.length);
        keywordButtonArray.splice((keywordCount - 1), 1);
        keywordCount--;
        console.log(keywordCount + " " + keywordButtonArray.length);
        this.setState({screenUpdate: ''});        
    }

    deleteKeyword(e){
        console.log("deleteKeyword: " + keywordButtonArray.length);
        if(keywordArray.length > 1){
            e.target.value = keywordArray[keywordArray.length-1];
        }
        else if (keywordArray.length === 1){
            e.target.value = keywordArray[0];
            console.log("deleteKeyword: " + keywordButtonArray.length);
        }
        keywordArray.splice(-1,1);
        keywordButtonArray.splice(-1,1);
        if(keywordCount > 0){keywordCount--;}
        this.setState({
            name: e.target.value
        });
        console.log("deleteKeyword: " + keywordButtonArray.length);
    }

        
    

    render() {
        return (
            <div>
                <div className="search"><input type="text" className="search__form" value={this.state.name} onChange={ (e) => this.handleInput(e) } /></div>
                <div className="search__keywords">{searchInput}<span className="keywordArray">{keywordButtonArray}</span></div>
            </div>
            );
        }
    }
    
    render(<EducationalSearch />, document.getElementById('root'));
    
    export default EducationalSearch;