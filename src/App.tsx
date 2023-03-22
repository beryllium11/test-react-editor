import React from 'react'
import './App.css'
import { useAppSelector } from './app/hooks'
import { RenderArea } from './app/components/renderArea/RenderArea'
import { ToolsArea } from './app/components/ToolsArea/ToolsArea'
import { WorkArea } from './app/components/workArea/WorkArea'
import styled from 'styled-components'

function App () {
  return (
    <div className="App">
        <AppWrapper>
            <ToolsArea/>
            <WorkArea/>
            <RenderArea/>
        </AppWrapper>
    </div>
  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: top;
  min-height: 100vh;
`

export default App
