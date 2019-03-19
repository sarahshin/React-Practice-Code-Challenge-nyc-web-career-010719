import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.slice(0,4).map(sushi=> <Sushi name={sushi.name} price={sushi.price} imgUrl={sushi.img_url} />)}
        <MoreButton buttonPressed={props.buttonPressed}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
