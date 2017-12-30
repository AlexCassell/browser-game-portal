/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import EducationalSearch from './components/educationalSearch';

import './css/styles.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {'content': < EducationalSearch />};
    }

    changeSlide(){
        this.state = {'content': 
        <div>
            <div className="educational__content__defaultSlide">
            
            </div>
        </div>        
};
    }

    render() {
        return (
            <div className="educational">
                <div className="educational__header">
                    <div className="educational__header__menu">
                        Educational Header
                    </div>
                </div>
                <div className="educational__content">
                    {this.state.content}
                </div>
            </div>
            );
        }
    }
    
    render(<Home />, document.getElementById('root'));
    
    export default Home;