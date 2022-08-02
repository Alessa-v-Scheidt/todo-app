export interface ButtonParams {
  content: HTMLElement | string
  onClick: () => void
}

export interface AsyncButtonParams {
  content: HTMLElement | string
  onClick: () => Promise<any>
}
