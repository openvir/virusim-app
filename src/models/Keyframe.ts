export interface VisualElement {
  getTarget(): string

  setStatus(status: string, remove: boolean): void
}

type Element = {
  element: VisualElement
  x: number
  y: number
  rotation: number | undefined
  scale: number | 1
  status?: string
}

export type Keyframe = {
  seconds: number
  title: string
  description: string
  elements: Array<Element>
}
