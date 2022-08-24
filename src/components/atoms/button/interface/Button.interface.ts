export interface ButtonParams {
  content: HTMLElement | string
  onClick: () => void
  cssClasses?: string[]
}

export interface AsyncButtonParams<T> {
  content: HTMLElement | string
  onClick: () => Promise<T>
  cssClasses?: string[]
}
