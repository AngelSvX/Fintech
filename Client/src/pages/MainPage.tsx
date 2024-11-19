import React from 'react'
import HeaderFintech from '../components/landing-page/HeaderFintech'
import LogoCarrousel from '../components/landing-page/LogoCarrousel'
import ValuePropositions from '../components/landing-page/ValuePropositions'
import UsPropositions from '../components/landing-page/UsPropositions'
import OurEvents from '../components/landing-page/OurEvents'
import FooterFintech from '../components/landing-page/FooterFintech'

function MainPage() {
  return (
    <div>
      <HeaderFintech/>
      <LogoCarrousel/>
      <ValuePropositions/>
      <UsPropositions/>
      <OurEvents/>
      <FooterFintech/>
    </div>
  )
}

export default MainPage