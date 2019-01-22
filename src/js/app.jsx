import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>SDCS Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
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
          <div className='row'>
            <div className='col-sm-6'>
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
            </div>

            <div className='col-sm-6'>
              <div className='card'>
                <div className='card-header bg-info'>Search History</div>
                <div className='card-body'>
                  <div className='list-group list-group-flush d-flex'>
                    <div className='list-group-item d-flex align-items-end flex-column py-0'>
                      <div className='d-flex w-100 justify-content-between'>
                        <p className='my-0'>San Diego</p>
                        <p className='my-0'>01/21/2019</p>
                      </div>
                      <p className='my-0'>20:53:00</p>
                    </div>
                    <div className='list-group-item d-flex align-items-end flex-column py-0'>
                      <div className='d-flex w-100 justify-content-between'>
                        <p className='my-0'>Portland</p>
                        <p className='my-0'>01/21/2019</p>
                      </div>
                      <p className='mb-0'>20:55:00</p>
                    </div>
                    <div className='list-group-item d-flex align-items-end flex-column py-0'>
                      <div className='d-flex w-100 justify-content-between'>
                        <p className='my-0'>Seatle</p>
                        <p className='my-0'>01/21/2019</p>
                      </div>
                      <p className='my-0'>20:57:00</p>
                    </div>
                    <div className='list-group-item d-flex align-items-end flex-column py-0'>
                      <div className='d-flex w-100 justify-content-between'>
                        <p className='my-0'>Paris</p>
                        <p className='my-0'>01/21/2019</p>
                      </div>
                      <p className='my-0'>20:59:00</p>
                    </div>
                    <div className='list-group-item d-flex align-items-end flex-column py-0'>
                      <div className='d-flex w-100 justify-content-between'>
                        <p className='my-0'>London</p>
                        <p className='my-0'>01/21/2019</p>
                      </div>
                      <p className='my-0'>20:59:00</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}
