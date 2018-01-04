/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import educationalGamesArray from '../components/educationalGamesArray';

import '../css/styles.css';



let searchInput = "", keywordArray = [], keywordButtonArray = [], keywordCount = 0, tempLetterHolder ="", searchText=<div className="search__keywords">{searchInput}<span className="keywordArray">{keywordArray}</span></div>;
let searchResult = [], searchAnimationString = "Search...", searchAnimationCount = 0;
const searchAnimationStringImmutable ="Search...";

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
                    let tempKWC = keywordCount;
                    keywordButtonArray.push(<button className="buttons__keywords" onClick={this.deleteKeywordOnClick.bind(this, tempKWC)}>{tempLetterHolder}</button>);
                    this.keywordsSearch();
                }
                else{
                    keywordArray.push(tempLetterHolder);
                    let tempKWC = keywordCount;
                        keywordButtonArray.push(<button className="buttons__keywords" onClick={this.deleteKeywordOnClick.bind(this, tempKWC)}>{tempLetterHolder}</button>);
                        this.keywordsSearch();
                } 
                e.target.value = " ";
            }
            this.setState({
                name: e.target.value
            });
        }
        
        
        for(let i = 1; i < tempLetterHolder.length; i++){
            if(tempLetterHolder[i] === " "){
                if(tempLetterHolder !== " "){
                    tempLetterHolder = tempLetterHolder.replace(/[^a-z]/gi, '');
                    if(tempLetterHolder !== ""){
                        if(keywordCount === 10){//this still needs some work
                            return;
                            // keywordArray.splice(0, 1);
                            // keywordArray[0] = keywordArray[0].replace(/[^a-z]/gi, '');
                            // keywordCount--;
                        }
                        else{
                            keywordCount++;
                        }
                        keywordArray.push(tempLetterHolder);
                        let tempKWC = keywordCount;
                        keywordButtonArray.push(<button className="buttons__keywords" onClick={this.deleteKeywordOnClick.bind(this, tempKWC)}>{tempLetterHolder}</button>);
                        this.keywordsSearch();
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
    
    }

        //Search Functions
    keywordsSearch(){
        // console.log(keywordArray);
        let gameArray = [];
        for(let i = 0;i < keywordArray.length; i++){
            for(let x = 0;x < educationalGamesArray.length; x++){
                for(let z = 0; z < educationalGamesArray[x].length; z++){//three deep
                    if(educationalGamesArray[x][z].replace(/[^a-z]/gi, '').includes(keywordArray[i].slice(0, 4))){
                        gameArray.push(x);
                    }
                }
            }
        }
        this.removeDuplicates(gameArray);
    }

    removeDuplicates(gameArray){
        // console.log(gameArray);
        for(let i = 0; i < gameArray.length; i++){
            for(let x = 0; x < gameArray.length; x++){
                if(gameArray[i] === gameArray[x] && x !== i){
                    gameArray.splice(x, 1);                    
                }
            }
        }
        this.displayFoundGames(gameArray);
        // console.log(gameArray);
        
    }

    displayFoundGames(gameArray){
        searchResult = [];
        // console.log(gameArray);
        for(let i = 0; i < gameArray.length; i++){//handles first page
            if(i <= educationalGamesArray.length)
                if(gameArray.length > 4){
                    if(i < 8){
                        searchResult.push(
                        <div className="educational__content__search__itemMoreThanFour">
                        {educationalGamesArray[gameArray[i]][0]}
                        </div>
                    );
                    }
                }
                else{
                    if(gameArray[i] === 0){
                        let game = 0;
                        searchResult.push(
                        <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess0">
                            <div className="educational__content__search__itemFourOrLess__Defaults__title">
                            {educationalGamesArray[gameArray[i]][0]}
                            </div>
                            <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                A rocket powered word game.  Race against the computer leveraging your knowledge of the Dolch word list.
                            </div>
                        </button>
                        );
                    }
                    else if(gameArray[i] === 1){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess1">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 2){
                                                searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess2">
                            <div className="educational__content__search__itemFourOrLess__Defaults__title">
                            {educationalGamesArray[gameArray[i]][0]}
                            </div>
                            <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                Some words about a game that does not and never will exist.  This is for demonstration purposes.
                            </div>
                        </button>
                        );
                    }
                    else if(gameArray[i] === 3){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess3">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 4){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess4">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 5){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess5">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 6){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess6">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 7){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess7">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 8){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess8">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 9){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess9">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 10){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess10">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                        }
                    else if(gameArray[i] === 11){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess11">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 12){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess12">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 13){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess13">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 14){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess14">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 15){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess15">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else if(gameArray[i] === 16){
                        searchResult.push(
                            <button onClick={() => this.openGame(gameArray[i])} className="educational__content__search__itemFourOrLess16">
                                <div className="educational__content__search__itemFourOrLess__Defaults__title">
                                {educationalGamesArray[gameArray[i]][0]}
                                </div>
                                <div className="educational__content__search__itemFourOrLess__Defaults__description">
                                    Some words about a game that does not and never will exist.  This is for demonstration purposes.
                                </div>
                            </button>
                            );
                    }
                    else{
                        searchResult.push(<div className="educational__content__search__itemFourOrLess">{educationalGamesArray[gameArray[i]][0]}</div>);
                    }
                    
                }
            
        }

        // console.log(searchResult.length);
    }

    openGame(game){
        console.log(game);
    }

    //Permanently Delete functions
    deleteKeywordOnClick(tempKWC){//Needs a series of if statements to keep track of buttons still on screen or add a number variable to track deletes and adds
        console.log(tempKWC + " " + keywordButtonArray.length);
        keywordButtonArray.splice((tempKWC - 1), 1);
        keywordArray.splice((tempKWC - 1), 1);
        console.log(keywordCount);
        console.log(tempKWC);
        keywordCount--;
        console.log(tempKWC + " " + keywordButtonArray.length);
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

    test(e){
        // console.log("Tested " + e.target.value);
        // if(keywordCount > 0){
        //     e.target.value = " ";
        //     // this.setCaretPosition(this.search, 2);
        // }
    }
    // setCaretPosition(elemId, caretPos) {
    //     let elem = document.getElementById(elemId);
        
    //     if(elem.createTextRange) {
    //         let range = elem.createTextRange();
    //         range.move('character', caretPos);
    //         range.select();
    //     }
    //     else {
    //         if(elem.selectionStart) {
    //             elem.focus();
    //             elem.setSelectionRange(caretPos, caretPos);
    //         }
    //         else
    //             elem.focus();
    //     }
    // }

    // moveCaretToEnd(e) {
    //     console.log("here");
    //     if (typeof e.selectionStart === "string") {
    //         e.selectionStart = e.selectionEnd = e.value.length;
    //     } else if (typeof e.createTextRange !== "undefined") {
    //         e.focus();
    //         var range = e.createTextRange();
    //         range.collapse(false);
    //         range.select();
    //     }
    // }

    // componentWillMount(){
    //     this.searchAnimation();
    // }



    // searchAnimation(searchAnimationCount){
    //     //create own component
    //     console.log(searchAnimationString);
    //     if(searchAnimationCount < searchAnimationString.length){
    //         if(searchAnimationCount === 0){
    //             searchAnimationString = this.changeCharacter(searchAnimationString, 0, ' ');
    //             // searchAnimationString = this.changeCharacter(searchAnimationString, 9, searchAnimationStringImmutable[9]);
    //             searchAnimationCount++
    //         }
    //         else{
    //             searchAnimationString = this.changeCharacter(searchAnimationString, searchAnimationCount, ' ');
    //             searchAnimationString = this.changeCharacter(searchAnimationString, searchAnimationCount - 1, searchAnimationStringImmutable[searchAnimationCount - 1]);
    //             searchAnimationCount++
    //         }
            
    //         setTimeout(this.searchAnimation.bind(this), 200);
            
    //     }

    // }

    // changeCharacter(str,index,chr) {
    //     if(index > str.length - 1) return str;
    //     return str.substr(0, index) + chr + str.substr(index + 1);
    // }
    

    render() {
        return (
            <div>
                <div className="search"><input type="text" placeholder="Search..." onFocus={ (e) => this.test(e) } className="search__form" value={this.state.name} onChange={ (e) => this.handleInput(e) } /></div>
                <div className="search__keywords">{searchInput}<span className="keywordArray">{keywordButtonArray}</span></div>
                <div className="educational__content__search">{searchResult}</div>
            </div>
            );
        }
    }
    
    render(<EducationalSearch />, document.getElementById('root'));
    
    export default EducationalSearch;