export interface VisualElement {
  getTarget(): string
}

type Element = {
  element: VisualElement
  x: number
  y: number
  rotation: number | undefined
}

export type Keyframe = {
  seconds: number
  title: string
  description: string
  elements: Array<Element>
}
