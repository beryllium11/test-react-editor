import { type IConstructorItem } from '../interfaces'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

interface IEditorState {
  blocks: IConstructorItem[]
}

const initialState: IEditorState = {
  blocks: [
    { type: 'headline', id: '111', text: 'headline1' },
    { type: 'image', id: '222', text: '' }
  ]
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    addBlock (state: IEditorState, action: PayloadAction<IConstructorItem>) {
      state.blocks.push(action.payload)
    },
    removeBlock (state: IEditorState, action: PayloadAction<string>) {
      state.blocks = state.blocks.filter((item) => {
        return item.id !== action.payload
      })
    },
    duplicateBlock (state: IEditorState, action: PayloadAction<string>) {
      const oldBlock = state.blocks.find((block) => {
        return block.id === action.payload
      })
      if (oldBlock) {
        const newBlock: IConstructorItem = { ...oldBlock, id: uniqid() }
        state.blocks.push(newBlock)
      }
    },
    moveUpBlock (state: IEditorState, action: PayloadAction<number>) {
      const temp = state.blocks[action.payload]
      if (temp) {
        state.blocks[action.payload] = state.blocks[action.payload - 1]
        state.blocks[action.payload - 1] = temp
      }
    },
    moveDownBlock (state: IEditorState, action: PayloadAction<number>) {
      const temp = state.blocks[action.payload]
      if (temp) {
        state.blocks[action.payload] = state.blocks[action.payload + 1]
        state.blocks[action.payload + 1] = temp
      }
    },
    editText (state: IEditorState, action: PayloadAction<{ id: string, text: string }>) {
      state.blocks = state.blocks.map((block) => {
        if (block.id === action.payload.id) {
          return { ...block, text: action.payload.text }
        }
        return block
      })
    }
  }
})

export default editorSlice.reducer
