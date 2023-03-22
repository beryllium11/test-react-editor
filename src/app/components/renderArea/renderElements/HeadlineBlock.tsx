import React from 'react'
import { type IConstructorItem } from '../../../interfaces'

export const HeadlineBlock = (text: string, id: string) => {
  return (
        <h3 key={id}>
            {text}
        </h3>
  )
}
