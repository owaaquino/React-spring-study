import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ComponentTriggered() {

  const [ toglleDown, setToggleDown] = useState(false);
  const [ toggleUp, setToggleUp] = useState(false);

  const { opacityDown, yDown, opacityUp, yUp} = useSpring( {
    opacityDown: toglleDown ? 1 : 0,
    yDown: toglleDown ? 0 : -50,
    opacityUp: toggleUp ? 1 : 0,
    yUp: toggleUp ? 0 : 50
  })


  return(
    <div className="details">
      <h3>Animation On Component Triggered</h3>
      <p>Animation will take effect when an event is triggred</p>

      <div className="board-trigger">
      <p>On Click, display card slide down</p>
        <div className="container">
          <animated.div className="box-trigger"
          style={{
            transform: yDown.interpolate( y => ( `translate3d(0,${y}px,0)`)),
            opacity: opacityDown.interpolate( opacityDown => ( opacityDown ))
          }}>
          </animated.div>
          <div className="button-container">
            <button className="trigger_btn" onClick={() => setToggleDown(!toglleDown)}>Click</button>
          </div>
        </div>
      </div>

      <div className="board-trigger">
      <p>On Click, display card slide up</p>
        <div className="container">
          <animated.div className="box-trigger"
          style={{
            transform: yUp.interpolate( y => ( `translate3d(0,${y}px,0)`)),
            opacity: opacityUp.interpolate( opacityUp => ( opacityUp ))
          }}>
          </animated.div>
          <div className="button-container">
            <button className="trigger_btn" onClick={() => setToggleUp(!toggleUp)}>Click</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ComponentTriggered;