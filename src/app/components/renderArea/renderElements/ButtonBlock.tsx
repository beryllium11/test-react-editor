import React from 'react'
import { Button } from '@mui/material'

export const ButtonBlock = (text: string, id: string) => {
  return (
      <Button key={id} variant="contained">{text}</Button>
  )
}
