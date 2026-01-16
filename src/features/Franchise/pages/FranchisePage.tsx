import React from 'react'
import { HeroFranchise } from '../components/HeroFranchise'
import { BusinessModels } from '../components/BusinessModels'
import { CoffeeInvestment } from '../components/CoffeeInvestment'

export const FranchisePage = () => {
  return (
    <div>
      <HeroFranchise />
      <BusinessModels />
      <CoffeeInvestment />
    </div>
  )
}
