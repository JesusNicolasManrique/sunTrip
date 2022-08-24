import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios' 
//import { sharingInformationService } from '../../services/sharing-information.service'

function ReservasDelDia (props){
  const {endpoint} = props
  const {isLoading, data} = useQuery('getData', ()=>{
   return axios.get(`http://localhost:3001/${endpoint}`)
  })
  
  if(isLoading){
     return <h2>Is loading</h2>
  } 

      //const subscription$ =  sharingInformationService.getSubject();
      //useEffect(()=>{
       /*  subscription$.subscribe(data =>{
          console.log(data);
        }) */
      //})
      
  return (
    <>
      <div className="col-md-8 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h4 className="card-title mb-1">Pasajeros del Dia</h4>
              <p className="text-muted mb-1">Informacion de llegada</p>
            </div>
            <div className="row overflow" >
              <div className="col-12">
                <div className="preview-list">
                {
                  data.data.map(reserva =>{

                    return (
                      <div key={reserva.id_reserva} className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                      <div className={`preview-icon ${reserva.icon_type}`}>
                        <i className={reserva.icon}></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-sm-flex flex-grow">
                      <div className="flex-grow">
                        <h6 className="preview-subject">{reserva.nombre}</h6>
                        <p className="text-muted mb-0">{reserva.bodega}</p>
                      </div>
                      <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                        <p className="text-muted">{reserva.fecha_reserva}</p>
                        <p className="text-muted mb-0">{reserva.cant_adultos} adulto/s {reserva.cant_menores} menor/es</p>
                      </div>
                    </div>
                    </div>
                  
                  )})
                }
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>       
    </>
    )
}

export default ReservasDelDia


