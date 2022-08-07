export interface ButtonParams {
  content: HTMLElement | string
  onClick: () => void
  cssClasses?: string[]
}

export interface AsyncButtonParams {
  content: HTMLElement | string
  onClick: () => Promise<any>
}
