import React, { Component } from 'react'

 class Finanzas extends Component {
    render() {
        return (
        <div className="row">
            <div className="col-sm-4 grid-margin">
                    <div className="card">
                    <div className="card-body">
                        <h5>Costos</h5>
                        <div className="row">
                        <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                            <h2 className="mb-0">$32123</h2>
                            <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                            </div>
                            <h6 className="text-muted font-weight-normal">11.38% Desde el mes Pasado</h6>
                        </div>
                        <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi mdi-minus-box text-danger ml-auto"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="col-sm-4 grid-margin">
                    <div className="card">
                    <div className="card-body">
                        <h5>Ventas</h5>
                        <div className="row">
                        <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                            <h2 className="mb-0">$45850</h2>
                            <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                            </div>
                            <h6 className="text-muted font-weight-normal"> 9.61% Desde el Mes Pasado</h6>
                        </div>
                        <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi mdi-plus-box text-primary ml-auto"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="col-sm-4 grid-margin">
                    <div className="card">
                    <div className="card-body">
                        <h5>Ganacia</h5>
                        <div className="row">
                        <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                            <h2 className="mb-0">$2039</h2>
                            <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                            </div>
                            <h6 className="text-muted font-weight-normal">2.27% Desde el mes pasado</h6>
                        </div>
                        <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi mdi-cash-usd text-success ml-auto"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Finanzas
