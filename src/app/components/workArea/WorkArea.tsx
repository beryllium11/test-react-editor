import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { BlockElement, type IChangeArgument } from './BlockElement'
import styled from 'styled-components'
import { editorSlice } from '../../reducers/editorSlice'

export const WorkArea = () => {
  const { blocks } = useAppSelector(state => state.editorReducer)
  const dispatch = useAppDispatch()
  const { duplicateBlock, moveDownBlock, moveUpBlock, removeBlock, editText } = editorSlice.actions

  const handleDuplicate = useCallback((id: string) => {
    dispatch(duplicateBlock(id))
  }, [])

  const handleMoveDown = useCallback((index: number) => {
    dispatch(moveDownBlock(index))
  }, [])

  const handleMoveUp = useCallback((index: number) => {
    dispatch(moveUpBlock(index))
  }, [])

  const handleRemove = useCallback((id: string) => {
    dispatch(removeBlock(id))
  }, [])

  const handleEdit = useCallback((obj: IChangeArgument) => {
    dispatch(editText(obj))
  }, [])

  return (
     <WorkAreaWrapper id='drop-zone'>
         {blocks.map((block, index) => {
           return (
                     <BlockElement key={block.id} block={block}
                     index={index}
                     onDuplicate={handleDuplicate}
                     onMoveDown={handleMoveDown}
                     onMoveUp={handleMoveUp}
                     onRemove={handleRemove}
                     onTextChange={handleEdit}/>
           )
         })}
     </WorkAreaWrapper>
  )
}

const WorkAreaWrapper = styled.div`
  background-color: #f5f5fc;
  padding: 40px 30px 30px;
  border: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-content: flex-start;
  flex-grow: 2;
`
