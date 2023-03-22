export type ItemType = 'headline' | 'paragraph' | 'button' | 'image'

export interface IConstructorItem {
  id: string
  type: ItemType
  text?: string
}
