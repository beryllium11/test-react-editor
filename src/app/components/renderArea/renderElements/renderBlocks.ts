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
        return ImageBlock(block.id)
      case 'button':
        return ButtonBlock(text, block.id)
      case 'paragraph':
        return ParagraphBlock(text, block.id)
      case 'headline':
        return HeadlineBlock(text, block.id)
      default:
        return null
    }
  })
}
