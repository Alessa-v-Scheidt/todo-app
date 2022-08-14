export interface ListElementParams {
  text: string
  editCallback: (editElement: HTMLElement) => void
  deleteCallback: () => void
  editSubmitCallback: (inputElement: HTMLInputElement) => void
}
