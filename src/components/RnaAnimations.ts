import anime from 'animejs'

import { VisualElement } from '../models/Keyframe'

export class RnaAnimations implements VisualElement {
  setStatus(status: string, remove: boolean): void {}

  getTarget() {
    return '.rnaWrapper'
  }

  idle() {
    anime({
      targets: '.rna',
      duration: 10000,
      rotate: '360',
      direction: 'forward',
      loop: true,
      easing: 'linear',
      scale: [0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1],
    })
  }
}
