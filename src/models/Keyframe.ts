type Element = {
  element: any
  x: number
  y: number
}

export type Keyframe = {
  id: any
  seconds: number
  title: string
  elements: Array<Element>
}
