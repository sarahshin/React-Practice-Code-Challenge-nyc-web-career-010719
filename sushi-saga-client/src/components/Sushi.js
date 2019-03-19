import React, { Fragment } from 'react'

const Sushi = (props) => {

  function handleClick(){
    console.log("eaten")
  }

  return (
    <Fragment>
    <div className="sushi">
      <div className="plate"
           onClick={this.handleClick}>
        {
          /* Tell me if this sushi has been eaten! */
          true ?
            <img src={props.imgUrl} width="100%" alt="sushi" />
          :
            null
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi
