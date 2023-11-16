import React from 'react'
import DashEmpresa from '../components/DashEmpresa'
import Navigation from '../components/Navigation'

const Empresa = () => {
  return (
    <div>
      <div className="grow flex flex-col md:flex-row lg:flex-row min-h-screen">
        {/* Render the Navigation component for navigation elements */}
        <Navigation />

        {/* Render the DashProEmpresa component for the main content of the Empresa page */}
        <DashEmpresa />
      </div>
    </div>
  )
}

export default Empresa