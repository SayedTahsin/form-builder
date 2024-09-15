export interface MultiStepForm {
  type: 'multi-step-form'
  step: Array<SingleStepForm>
  labe: string
  loader?: string
}

export interface SingleStepForm {
  type: 'single-step-from'
  schema: string
  label: string
  elements: Array<BaseElement>
  loader?: string
}

export type IfType = {
  type: 'function' | 'computed'
  name: string
}

export type Options = Array<string> | Array<{ name: string; value: string }>
export type Init =
  | { type: 'func'; value: string }
  | { type: 'static'; value: string | number | boolean }
export type Watchers = { paths: Array<string>; func: string }

interface BaseCommon {
  label: string
  schema: string
  if?: IfType
  loader?: string
  disable?: boolean
  init?: Init
  watcher?: Watchers
}

export interface Input extends BaseCommon {
  type: 'input'
}

export interface TextArea extends BaseCommon {
  type: 'textarea'
}

export interface Select extends BaseCommon {
  type: 'select'
  options?: Options
}

export interface CheckBox extends BaseCommon {
  type: 'checkbox'
}

export interface Radio extends BaseCommon {
  type: 'radio'
  options: Options
}

export interface Switch extends BaseCommon {
  type: 'switch'
}

export interface Anchor extends BaseCommon {
  type: 'anchor'
}

export interface ArrayObject extends BaseCommon {
  type: 'array-object-form'
  elements: Array<BaseElement>
}

export type BaseElement =
  | Input
  | Select
  | TextArea
  | Radio
  | CheckBox
  | Switch
  | Anchor
  | ArrayObject

export type FormType = SingleStepForm | MultiStepForm
