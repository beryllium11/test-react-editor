import { type IConstructorItem } from '../../../interfaces'
import { ImageBlock } from './ImageBlock'
import { ButtonBlock } from './ButtonBlock'
import { ParagraphBlock } from './ParagraphBlock'
import { HeadlineBlock } from './HeadlineBlock'

export const renderBlocks = (blocks: IConstructorItem[]) => {
  return blocks.map((block) => {
    const text = block.text ?? ''
    switch (block.type) {
      case 'image':
        return <div key={block.id}>{ImageBlock()}</div>
      case 'button':
        return <div key={block.id}>{ButtonBlock(text)}</div>
      case 'paragraph':
        return <div key={block.id}>{ParagraphBlock(text)}</div>
      case 'headline':
        return <div key={block.id}>{HeadlineBlock(text)}</div>
      default:
        return null
    }
  })
}
