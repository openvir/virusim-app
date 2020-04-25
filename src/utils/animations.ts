import anime from 'animejs'

export function moveElement(
  target: string,
  x: number,
  y: number,
  duration: number
) {
  anime({
    targets: target,
    translateX: 0,
    translateY: 0,
    left: `${x}px`,
    top: `${y}px`,
    duration: duration * 1000,
    direction: 'forward',
    easing: 'easeOutElastic(1, .8)',
    loop: false,
  })
}
