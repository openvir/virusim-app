import anime from 'animejs'

import { VisualElement } from '../../models/Keyframe'

function followPath(path: string) {
  const rnaPath = anime.path(path)
  return anime({
    targets: '.ribosome',
    translateX: rnaPath('x'),
    translateY: rnaPath('y'),
    rotate: rnaPath('angle'),
    easing: () => {
      return 'linear'
    },
    duration: 10000,
    loop: false,
    complete: () => {
      console.log('done')
    },
  })
}

export class RibosomeAnimations implements VisualElement {
  replicationAnimation: anime.AnimeInstance | null = null

  setStatus(status: string, remove: boolean): void {
    if (status === 'replicate') {
      if (remove) {
        if (this.replicationAnimation) this.replicationAnimation.pause()
      } else {
        this.replicate()
      }
    }
  }

  getTarget() {
    return '.'
  }

  moveRibosomeToRna() {
    const offset = 30
    anime({
      targets: '.ribosome',
      left: `${278 - offset}px`,
      top: `${274 - offset}px`,
    })
  }

  replicate() {
    this.moveRibosomeToRna()
    this.replicationAnimation = followPath('.rna-path')
  }
}
