// The JSON structure for Charts
export interface Chart {
  data: Data;
  meta: Meta;
}
interface Data {
  entities: (String)[] | [];
  values: (any)[] | [];
}
interface Meta {
  chartType: String;
  width: String;
  height: String;
  options: any;
}
export interface OrderProductInfo {
  id: string,
  amount: number,
  type: String,
  quantity: number,

}

export interface OrderInfo {
  description: string,
  status: string,
  name: string,

}