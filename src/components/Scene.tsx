import { Component } from 'react'
import { VisualElement } from '../models/Keyframe'

class Scene extends Component implements VisualElement {
  setStatus(status: string, remove: boolean): void {}

  getTarget() {
    return '.scene'
  }
}

export default Scene
