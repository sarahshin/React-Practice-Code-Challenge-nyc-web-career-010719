import React from 'react'

const Sushi = (props) => {

  const handleSushiClick = () => {
    props.eatSushi(props.id)
  }
  return (
    <div className="sushi">
      <div className="plate"
           onClick={handleSushiClick}>
        {
          props.eatenSushi.find(sushi=> sushi.id === props.id)
           ?
            null
          :
            <img src={props.img_url} width="100%" alt="sushi"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
