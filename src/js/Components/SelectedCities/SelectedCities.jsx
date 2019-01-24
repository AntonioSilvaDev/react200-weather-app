import React from 'react';

//importing Action Creators
import {
    updateSearchCity,
    fetchData
} from './selectedActions';
import { bindActionCreators } from 'redux';

export default class SelectedCities extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler=this.clickHandler.bind(this);
        this.handleCityInput=this.handleCityInput.bind(this);
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearchCity(value));
    }

    clickHandler(event){
        const { value } = event.target;
        const { dispatch } = this.props;
        dispatch(fetchData(value));
    }

    render() {
        const { city } = this.props;
        return(
            <div className='col-12 mb-3'>
                <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                    <button className='btn btn-primary' value='San Diego' onClick={this.clickHandler}   >San Diego</button>
                    <button className='btn btn-primary' value='New York' onClick={this.clickHandler}    >New York</button>
                    <button className='btn btn-primary' value='Washington'
                        onClick={this.clickHandler}>Washington DC</button>
                    <button className='btn btn-primary' value='London' onClick={this.clickHandler}      >London</button>
                    <button className='btn btn-primary' value='Tokyo' onClick={this.clickHandler}       >Tokyo</button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="city-name" value={ city } aria-describedby="basic-addon2" onChange={this.handleCityInput} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" value={ city } onClick={this.clickHandler}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}