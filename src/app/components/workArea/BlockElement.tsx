import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { type IConstructorItem } from '../../interfaces'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { TextField } from '@mui/material'
import isMenuVisible from './isMenuVisible'
import { renderIcons } from '../ToolsArea/IconRender'

export interface IChangeArgument {
  id: string
  text: string
}

interface Props {
  block: IConstructorItem
  index: number
  onRemove: (id: string) => void
  onDuplicate: (id: string) => void
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  onTextChange: (obj: IChangeArgument) => void
}

export const BlockElement = ({ block, onRemove, onMoveDown, onMoveUp, onTextChange, onDuplicate, index }: Props) => {
  const { id, type, text } = block
  const [currentText, setCurrentText] = useState<string>(text ?? '')
  const { ref, isVisible, setIsVisible } = isMenuVisible(false)

  const handeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentText(e.currentTarget.value)
    onTextChange({ id, text: e.currentTarget.value })
  }
  return (
      <BlockWrapper ref={ref} id={id} onClick={() => { setIsVisible(true) }}>
        <>
        {renderIcons(type)}
        <p style={{ marginBottom: 0, marginTop: 5 }}>{type}</p>
        {isVisible &&
          (<div>
              <MenuWrapper>
                <IconButton onClick={() => { onMoveUp(index) }} aria-label="move up">
                  <ArrowUpwardIcon />
                </IconButton>
                <IconButton onClick={() => { onMoveDown(index) }} aria-label="move down">
                  <ArrowDownwardIcon />
                </IconButton>
                <IconButton onClick={() => { onDuplicate(id) }} aria-label="duplicate">
                  <ContentCopyIcon />
                </IconButton>
                <IconButton onClick={() => { onRemove(id) }} aria-label="remove">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </MenuWrapper>
              {type !== 'image'
                ? (<TextField style={{ marginTop: 10, backgroundColor: '#fff' }}
                              fullWidth
                              multiline={type === 'paragraph'}
                              onChange={handeChange}
                              value={currentText} />)
                : null }
             </div>)
          }
        </>
      </BlockWrapper>
  )
}

const BlockWrapper = styled.div`
  display: inline-block;
  max-width: 100%;
  padding: 25px 50px;
  position: relative;
  background-color: #fff;
  transition: 0.3s;
`

const MenuWrapper = styled.div`
  position: absolute;
  background-color: rgba(217,231,255, 0.6);
  top: -40px;
  right: 0;
`
