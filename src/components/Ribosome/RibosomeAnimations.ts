import anime from 'animejs'

import { VisualElement } from '../../models/Keyframe'

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

  replicate() {
    const rnaPath = anime.path('.rna-path')

    const offset = 30

    // move ribosome to rna
    anime({
      targets: '.ribosome',
      left: `${278 - offset}px`,
      top: `${274 - offset}px`,
    })

    this.replicationAnimation = anime({
      targets: '.ribosome',
      translateX: rnaPath('x'),
      translateY: rnaPath('y'),
      rotate: rnaPath('angle'),
      easing: () => {
        return 'linear'
      },
      duration: 10000,
      loop: true,
    })
  }
}
