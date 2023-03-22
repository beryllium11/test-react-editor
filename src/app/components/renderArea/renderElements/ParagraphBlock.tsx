import React from 'react'

export const ParagraphBlock = (text: string, id: string) => {
  return (
        <p key={id}>
            {text}
        </p>
  )
}
