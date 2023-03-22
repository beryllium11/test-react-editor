import React from 'react'
import { type IConstructorItem } from '../../interfaces'
import { renderBlocks } from './renderElements/renderBlocks'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { editorSlice } from '../../reducers/editorSlice'
import styled from 'styled-components'

export const RenderArea = () => {
  const { blocks } = useAppSelector(state => state.editorReducer)

  return (
        <RenderAreaWrapper>
            {renderBlocks(blocks)}
        </RenderAreaWrapper>
  )
}

const RenderAreaWrapper = styled.div`
  max-width: 632px;
  padding: 30px 45px;
  flex-grow: 3;
  img {
    max-width: 100%;
  }
`
