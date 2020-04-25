export interface VisualElement {
  getTarget(): string
}

type Element = {
  element: VisualElement
  x: number
  y: number
}

export type Keyframe = {
  seconds: number
  title: string
  description: string
  elements: Array<Element>
}
