import anime from 'animejs'

import { VisualElement } from '../models/Keyframe'

export class RnaAnimations implements VisualElement {
  idleAnimation: anime.AnimeInstance | null = null

  setStatus(status: string, remove: boolean): void {
    if (status === 'stopIdle') {
      if (remove) {
        if (this.idleAnimation) this.idleAnimation.restart()
      } else {
        if (this.idleAnimation) this.idleAnimation.pause()
      }
    }
  }

  getTarget() {
    return '.rnaWrapper'
  }

  idle() {
    this.idleAnimation = anime({
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
