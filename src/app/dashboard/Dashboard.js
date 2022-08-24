import React from 'react';
import Finanzas from '../components/Finanzas';
import Cobros from '../components/Cobros';
import ReservasDelDia from '../components/ReservasDelDia';
import EstadoDeOrdenes from '../components/EstadoDeOrdenes';
import BasicTable from '../tables/BasicTable';
import {QueryClient, QueryClientProvider } from 'react-query'


function Dashboard (){
    const queryClient = new QueryClient()
    return (
      <div>
     <Finanzas/>
        <div className="row">
          {/* Aca agregar en el futuro el tamaño por props */}
          <Cobros/>
           {/* Aca agregar en el futuro el tamaño por props */}
           <QueryClientProvider client={queryClient}>
            <ReservasDelDia endpoint="reservas"/>
           </QueryClientProvider>
        </div>
        <div className="row">
        <QueryClientProvider client={queryClient}>
          <EstadoDeOrdenes endpoint="reservas"/>
        </QueryClientProvider>
      </div>
</div>
    );
  }
  
  export default Dashboard;