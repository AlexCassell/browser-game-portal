

const Search = () => {
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
        for(let i = 0; i < gameArray.length; i++){
            for(let x = 0; x < gameArray.length; x++){
                if(gameArray[i] === gameArray[x] && x !== i){
                    gameArray.splice(x, 1);                    
                }
            }
        }
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
        
        
    
    return ("While " + actionArr[actionRandom] + " a " + whoArr[whoRandom] + ", you find " + howManyResource + " " + resourcesArr[resourceRandom] + " in a " + foundArr[foundRandom] + ".");
    }
// 
export default Search;