import anime from 'animejs'

const previousAnimations: any = {}

export function moveElement(
  target: string,
  x: number,
  y: number,
  rotation: number,
  duration: number
) {
  const previousAnimation = previousAnimations[target]
  if (previousAnimation) {
    // this should be destroyed, but apparently does not exist
    previousAnimation.pause()
  }
  previousAnimations[target] = anime({
    targets: target,
    translateX: 0,
    translateY: 0,
    left: `${x}px`,
    top: `${y}px`,
    rotate: rotation,
    duration: duration * 1000,
    direction: 'forward',
    easing: 'easeOutElastic(1, .8)',
    loop: false,
  })
}
