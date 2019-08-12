import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ComponentTriggered() {
  return(
    <div className="details">
    <h3>Animation On Component Triggered</h3>
    <p>Animation will trigger when the event is triggred</p>
    </div>
  )
}

export default ComponentTriggered;