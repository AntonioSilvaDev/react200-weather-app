import React from 'react';

class CityInformation extends React.Component {
    render(){


        return(
            <div className='card'>
                <div className='card-header bg-info'>City Information</div>
                <div className='card-body text-center'>
                  <h1 className='card-title'>Tokyo</h1>
                  <p className='card-text'>Lat/Long: 45.56, 75.68</p>
                  <hr className='m-1' />
                  <div className='row'>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Temperature (F)</p>
                      <h5 className='values'>65.56F</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Pressure</p>
                      <h5 className='values'>100.50</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Humidity</p>
                      <h5 className='values'>45.3%</h5>
                    </div>
                  </div>
                  <div className='buffer'></div>
                  <div className='row'>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Lowest Temp (F)</p>
                      <h5 className='values'>65.56F</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Highest Temp (F)</p>
                      <h5 className='values'>100.50F</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Wind Speed</p>
                      <h5 className='values'>150mph</h5>
                    </div>
                  </div>
                </div>
              </div>

        );
    }
}

export default CityInformation;