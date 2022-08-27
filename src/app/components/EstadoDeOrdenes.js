import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'

const options = {cacheTime: 5000}
function ReservasFuturas (props){
  const {endpoint} = props
  const fetchPasajeros = ()=>{
    return axios.get(`http://localhost:3001/${endpoint}`)
  }
  const {isLoading, data, IsError, errorMessage, IsFetching} = useQuery('getreservasFuturas', fetchPasajeros, options)
  
  if(isLoading){
     return <h2>Is loading</h2>
  } 

        return (
            <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Estado de ordenes</h4>
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </th>
                        <th> Reserva No </th>
                        <th> Fecha reserva </th>
                        <th> Nombre del Cliente </th>
                        <th> Fecha de llegada </th>
                        <th> Vendedor </th>
                        <th> Precio Venta </th>
                        <th> Medio de Pago </th>
                        <th> Estado Reserva </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      data.data.map(reservaFutura =>{  
                      return (
                          <tr>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input" />
                                  <i className="input-helper"></i>
                                </label>
                              </div>
                            </td>
                            <td> {reservaFutura.id_reserva} </td>
                            <td> {reservaFutura.fecha_reserva} </td>
                            <td>
                              <div className="d-flex">
                                {/* <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                                */}<span className="pl-2">{reservaFutura.nombreTitularReserva}</span>
                              </div>
                            </td>
                            <td> {reservaFutura.llegada_resera} </td>
                            <td> {reservaFutura.vendedor} </td>
                            <td> {reservaFutura.precio_venta}  </td>
                            <td> {reservaFutura.medio_pago} </td>
                            <td>
                              <div className={`${reservaFutura.icon_estado}`}>{reservaFutura.estado}</div>
                            </td>
                          </tr>
                        )})
                     }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        
        )
    
}

export default ReservasFuturas
