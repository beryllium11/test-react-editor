import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import NotesIcon from '@mui/icons-material/Notes'
import { Button } from '@mui/material'
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import { useAppDispatch } from '../../hooks'
import { editorSlice } from '../../reducers/editorSlice'
import { type ItemType } from '../../interfaces'
import uniqid from 'uniqid'

export const HEADLINE_TEXT = 'Headline text'
export const PARAGRAPH_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const BUTTON_TEXT = 'Button'

const addStandardBlock = (type: ItemType | null): [ItemType, string] => {
  switch (type) {
    case 'image':
      return [type, '']
    case 'headline':
      return [type, HEADLINE_TEXT]
    case 'button':
      return [type, BUTTON_TEXT]
    case 'paragraph':
      return [type, PARAGRAPH_TEXT]
    default: {
      return ['image', '']
    }
  }
}

export const ToolsArea = () => {
  const dispatch = useAppDispatch()
  const { addBlock } = editorSlice.actions
  const handleClick = useCallback((type: ItemType, text = '') => {
    dispatch(addBlock({ id: uniqid(), text, type }))
  }, [])
  const [type, setType] = useState<ItemType | null>()
  const [prevType, setPrevType] = useState<ItemType>('headline')

  const target = document.getElementById('drop-zone')

  const dropEL = (event: DragEvent) => {
    event.preventDefault()
    if (event.target === target || window.document.activeElement === target) {
      if (type && target) {
        handleClick(...addStandardBlock(type))
        target.removeEventListener('drop', dropEL)
      }
    }
  }

  const handleDragStart = (type: ItemType) => {
    setType(type)
  }

  useEffect(() => {
    console.log('prevType', prevType, 'type', type)
    if (target) {
      target.addEventListener('dragover', (event) => {
        event.preventDefault()
      })
      target.addEventListener('drop', dropEL)
    }
  }, [type])

  return (
        <ToolsAreaWrapper>
            <ButtonWrapper draggable
                           onDragStart={() => { handleDragStart('headline') }}
                           onClick={() => { handleClick(...addStandardBlock('headline')) }}
                           startIcon={<FeaturedPlayListOutlinedIcon />}
                           variant='outlined'>
                <p>Headline</p>
            </ButtonWrapper>
            <ButtonWrapper draggable
                           onDragStart={() => { handleDragStart('paragraph') }}
                           onClick={() => { handleClick(...addStandardBlock('paragraph')) }}
                           startIcon={<NotesIcon/>} variant='outlined'>
                <p>Paragraph</p>
            </ButtonWrapper>
            <ButtonWrapper draggable
                           onDragStart={() => { handleDragStart('button') }}
                           onClick={() => { handleClick(...addStandardBlock('button')) }}
                           startIcon={<SmartButtonOutlinedIcon />} variant='outlined'>
                <p>Button</p>
            </ButtonWrapper>
            <ButtonWrapper draggable
                           onDragStart={() => { handleDragStart('image') }}
                           onClick={() => { handleClick(...addStandardBlock('image')) }}
                           startIcon={<ImageOutlinedIcon/>} variant='outlined'>
                <p>Image</p>
            </ButtonWrapper>
        </ToolsAreaWrapper>
  )
}

const ToolsAreaWrapper = styled.div`
  padding: 40px 20px;
  max-width: 300px;
  border: 1px solid #bbb;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  gap: 10px;
  align-content: flex-start;
  >* {
    flex-basis: calc(50% - 10px);
  }
`
const ButtonWrapper = styled(Button)`
  height: 83px;
  width: 100px;
  text-align: center;
  position: relative;
  padding-top: 50px;
  p {
    font-size: 13px;
  }
`
