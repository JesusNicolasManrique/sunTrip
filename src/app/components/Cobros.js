
import React, { Component } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios' 
import { Doughnut } from 'react-chartjs-2';
const cacheTime = {cacheTime: 5000, refetchIntervalInBackground:true}
function Cobros (props){
  const {endpoint} = props
  const auth = {auth: {
    username: "Jesu",
    password: "123"
  }
}
  const fetchCobros = ()=>{
    return axios.get(`http://localhost:3001/${endpoint},{auth}`)
  }
  const {isLoading, data, IsError, error, IsFetching} = useQuery('getCobros', fetchCobros, cacheTime)
  
  if(isLoading){
     return <h2>Is loading</h2>
  } 

  let label=[]
  let value=[] 
  let color=[] 
  data.data.map(cobros =>{
    label.push(cobros.label);
    value.push(cobros.valor);
    color.push(cobros.color)
  })

  const total = data.data.reduce((accumulator, object) => {
    return accumulator + object.valor;
  }, 0);


let transactionHistoryData =  {
        labels:label,
        datasets: [{
            data: value,
            backgroundColor: color
          }
        ]
      };
    
let transactionHistoryOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 70,
        elements: {
          arc: {
              borderWidth: 0
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    
let sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }


      
        return (
            <>
            <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Historial de Cobros</h4>
                <div className="aligner-wrapper">
                  <Doughnut data={transactionHistoryData} options={transactionHistoryOptions} settings={sliderSettings} />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">${total}</h5>
                    <p className="text-small text-muted text-center mb-0">Total</p>
                  </div>
                </div>  
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Pagos en Pesos</h6>
                    <p className="text-muted mb-0">07 Set 2022, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">${value[0]}</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Pagos en Dolares</h6>
                    <p className="text-muted mb-0">07 Set 2022, 10:22AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$670</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Pagos en Rreales</h6>
                    <p className="text-muted mb-0">07 Set 2022, 10:30AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$593</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </>
        )
    }


export default Cobros
