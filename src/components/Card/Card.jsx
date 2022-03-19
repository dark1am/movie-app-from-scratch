import {CardUnit, CardWrapper} from './Card.elements'

const Card = (props) => {
    
  const { title, img, description } = props

  return (
    <> 
      <CardUnit>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </CardUnit>
    </>
  )
}

export default Card