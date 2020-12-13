import React, { useCallback, useState, createContext } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import HomePage from './SampleTest1/HomePage'
import Test2 from './SampleTest2/App'

export const DisplayContext = createContext({
  toggleDisplay: () => {},
})

const RouteApps = () => {
  const [display, setDisplay] = useState('block')
  const toggleDisplay = useCallback((display) => {
    setDisplay(display === 'none' ? 'block' : 'none')
  }, [])

  const CustomBox = styled(Box)({
    display: display,
  })

  return (
    <DisplayContext.Provider value={{ toggleDisplay }}>
      <BrowserRouter>
        <CustomBox className="topLink">
          <p>
            <Link to="/home">home</Link>
          </p>
          <p>
            <Link to="/test">test</Link>
          </p>
        </CustomBox>

        <Route>
          <Route path="/home" component={HomePage} />
          <Route path="/test" component={Test2} />
        </Route>
      </BrowserRouter>
    </DisplayContext.Provider>
  )
}

export default RouteApps
