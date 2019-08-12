import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';

function ComponentRender() {

  const fade = useSpring( { opacity: 1, from: { opacity: 0}, delay: 1000})

  const slideToRight = useSpring({
    from: { transform: `translate3d(-100%,0,0)` },
    to: { transform: `translate3d(0,0,0)` }
  });

  const slideToLeft = useSpring({
    from: { transform: `translate3d( 100%,0,0)` },
    to: { transform: `translate3d(0,0,0)` }
  });

  const slideUp = useSpring({
    from: { opacity: 0, transform: `translate3d( 0, 10%,0)` },
    to: { opacity: 1, transform: `translate3d(0,0,0)`  }
  });

  const slideDown = useSpring({
    from: { opacity: 0, transform: `translate3d( 0, -10%,0)` },
    to: { opacity: 1, transform: `translate3d(0,0,0)`  }
  });

  return (
  <div className="details">
    <h3>Animation On Component Render</h3>
    <p>Animation will trigger when the website rendered components</p>

    <div className="board">
      <p>Fade In card using opacity</p>
    <ul className="deck">
      <animated.li className="card"  style={fade}></animated.li>
      <animated.li className="card" style={fade}></animated.li>
      <animated.li className="card" style={fade}></animated.li>
    </ul>
    </div>

    <div className="board">
      <p>Fade In card from left to right</p>
    <ul className="deck">
      <animated.li className="card"  style={slideToRight}></animated.li>
    </ul>
    </div>

    <div className="board">
      <p>Fade In card from right to left</p>
    <ul className="deck">
      <animated.li className="card"  style={slideToLeft}></animated.li>
    </ul>
    </div>

    <div className="board">
      <p>Fade In card from right to left / left to right</p>
    <ul className="deck">
      <animated.li className="card"  style={slideToRight}></animated.li>
      <animated.li className="card"  style={slideToLeft}></animated.li>
    </ul>
    </div>

    <div className="board">
      <p>Fade In card opacity, going up</p>
    <ul className="deck">
      <animated.li className="card"  style={slideUp}></animated.li>
      <animated.li className="card" style={slideUp}></animated.li>
      <animated.li className="card" style={slideUp}></animated.li>
    </ul>
    </div>

    <div className="board">
      <p>Fade In card opacity, going down</p>
    <ul className="deck">
      <animated.li className="card"  style={slideDown}></animated.li>
      <animated.li className="card" style={slideDown}></animated.li>
      <animated.li className="card" style={slideDown}></animated.li>
    </ul>
    </div>

    <div className="board">
      <p>Fade In text opacity, going up</p>
    <div className="textBoard">
      <animated.h1 style={slideUp}>Text Here</animated.h1>
      <animated.p style={slideUp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      <animated.p style={slideUp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
    </div>
    </div>

    <div className="board">
      <p>Fade In text opacity, going up</p>
    <div className="textBoard">
      <animated.h1 style={slideUp}>Text Here</animated.h1>
      <div className="two-cols">
      <animated.p style={slideUp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      <animated.p style={slideUp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      </div>
    </div>
    </div>

    <div className="board">
      <p>Fade In text opacity, going right</p>
    <div className="textBoard">
      <animated.h1 style={slideToRight}>Text Here</animated.h1>
      <div className="two-cols">
      <animated.p style={slideToRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      <animated.p style={slideToRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      </div>
    </div>
    </div>

    <div className="board">
      <p>Fade In text opacity, going left</p>
    <div className="textBoard">
      <animated.h1 style={slideToRight}>Text Here</animated.h1>
      <div className="two-cols">
      <animated.p style={slideToLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      <animated.p style={slideToLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tempus magna. Maecenas et urna libero. Aliquam eget cursus justo. Quisque urna tortor, feugiat at nunc vel, vestibulum aliquet orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis ex felis. Suspendisse vel vestibulum ipsum, nec egestas sapien.</animated.p>
      </div>
    </div>
    </div>

  </div>)
}

export default ComponentRender;