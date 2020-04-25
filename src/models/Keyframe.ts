export interface VisualElement {
  getTarget(): string
}

type Element = {
  element: VisualElement
  x: number
  y: number
}

export type Keyframe = {
  id: any
  seconds: number
  title: string
  description: string
  elements: Array<Element>
}
