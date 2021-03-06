import anime from 'animejs'

const previousAnimations: any = {}

export function moveElement(
  target: string,
  x: number,
  y: number,
  rotation: number,
  scale: number,
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
    scale: scale,
    duration: duration * 1000,
    direction: 'forward',
    easing: 'easeOutElastic(0.2, .8)',
    loop: false,
  })
}
