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
        if(event.target.value) {
        const { value } = event.target;
        const { dispatch } = this.props;
        dispatch(fetchData(value));
        }
        else {
            return alert('Please enter a value for city and try again!');
        }
    }

    render() {
        const { city } = this.props;
        return(
            <div className='col-12 mb-3'>
                <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                    <button className='btn btn-primary' value='San Diego' onClick={this.clickHandler}>San Diego</button>
                    <button className='btn btn-primary' value='Hanford' onClick={this.clickHandler}>Hanford</button>
                    <button className='btn btn-primary' value='Portland' onClick={this.clickHandler}>Portland</button>
                    <button className='btn btn-primary' value='London' onClick={this.clickHandler}>London</button>
                    <button className='btn btn-primary' value='Seattle' onClick={this.clickHandler}>Seattle</button>
                    <button className='btn btn-primary' value='Paris' onClick={this.clickHandler}>Paris</button>
                    <button className='btn btn-primary' value='Bali' onClick={this.clickHandler}>Bali</button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="city-name" value={ city } placeholder='City Name...' aria-describedby="basic-addon2" onChange={this.handleCityInput} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" value={ city } onClick={this.clickHandler}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}