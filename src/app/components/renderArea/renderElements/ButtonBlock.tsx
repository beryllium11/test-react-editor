import React from 'react'
import { Button } from '@mui/material'

export const ButtonBlock = (text: string) => {
  return (
      <Button style={{ marginTop: 15, marginBottom: 15 }} variant="contained">{text}</Button>
  )
}
