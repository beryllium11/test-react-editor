import React from 'react'
import image from './../../../../assets/image.jpg'

export const ImageBlock = (id: string) => {
  return (
        <div>
            <img src={image} alt="image-block"/>
        </div>
  )
}
