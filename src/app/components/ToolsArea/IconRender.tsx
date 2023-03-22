import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import NotesIcon from '@mui/icons-material/Notes'
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import { type ItemType } from '../../interfaces'

export const renderIcons = (type: ItemType) => {
  switch (type) {
    case 'image':
      return <ImageOutlinedIcon/>
    case 'button':
      return <SmartButtonOutlinedIcon/>
    case 'paragraph':
      return <NotesIcon/>
    case 'headline':
      return <FeaturedPlayListOutlinedIcon/>
    default:
      return null
  }
}
