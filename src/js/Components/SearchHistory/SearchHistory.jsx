import React from 'react';

class SearchHistory extends React.Component{
    render(){

        return (
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
        );
    }
}

export default SearchHistory;