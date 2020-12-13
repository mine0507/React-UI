import React, { useContext } from 'react'
import GenericTemplate from './templates/GenericTemplate.jsx'
import { DisplayContext } from '../RouteApps'

const HomePage = () => {
  const context = useContext(DisplayContext)

  context.toggleDisplay()

  return (
    <GenericTemplate title="トップページ">
      <>トップページ内容</>
    </GenericTemplate>
  )
}

export default HomePage
