import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushis = () => {
    return props.sushis.slice(props.index, props.index + 4).map(sushi => {
      return <Sushi {...sushi} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushis()
        }
        <MoreButton renderFourMoreSushis={props.renderFourMoreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
