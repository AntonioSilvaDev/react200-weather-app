import React from 'react';

export default class SelectedCities extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <div className='col-12 mb-3'>
                <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                    <label htmlFor="San Diego" className='btn btn-primary'>
                        <input type="radio" name='options' id='option1' autocomplete='off' /> San Diego
                    </label>
                    <label htmlFor="New York" className='btn btn-primary'>
                        <input type="radio" name='options' id='option2' autocomplete='off' /> New York
                    </label>
                    <label htmlFor="Washington" className='btn btn-primary'>
                        <input type="radio" name='options' id='option3' autocomplete='off' /> Washington
                    </label>
                    <label htmlFor="London" className='btn btn-primary'>
                        <input type="radio" name='options' id='option4' autocomplete='off' /> London
                    </label>
                    <label htmlFor="Tokyo" className='btn btn-primary'>
                        <input type="radio" name='options' id='option5' autocomplete='off' /> Tokyo
                    </label>
                </div>
                <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="city-name" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Go!</button>
                </div>
                </div>
            </div>
        );
    }
}