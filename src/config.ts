import { readFileSync } from "fs";
import { join } from "path";

const serviceAccountFile = join(process.cwd(), process.env.GOOGLE_APPLICATION_CREDENTIALS || 'serviceAccountKey.json')
const { project_id } = JSON.parse(readFileSync(serviceAccountFile, 'utf-8'))

const line: ILineConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
  channelId: process.env.LINE_CHANNEL_ID || '',
}

const linePay = require('line-pay')
const pay = new linePay({
  channelId: process.env.LINE_PAY_CHANNEL_ID,
  channelSecret: process.env.LINE_PAY_CHANNEL_SECRET,
  isSandbox: process.env.LINE_PAY_PRODUCTION !== 'true',
})

const googleProject = project_id
const port = parseInt(process.env.PORT || '') || 3000
const apis = ['webhook', 'fulfillment']
const providers = ['line']
const imageResizeService = process.env.IMG_RESIZE_SERVICE || ''

export const config: IConfig = {
  port,
  line,
  apis,
  providers,
  googleProject,
  imageResizeService,
  linepay: pay,
  transactionStore: {},
  linepayConfirmUrl: process.env.LINE_PAY_CONFIRM_URL
}

export interface IConfig {
  port: number,
  googleProject: string,
  line?: ILineConfig,
  apis: string[],
  providers: string[],
  imageResizeService: string,
  linepay: any,
  transactionStore: any,
  linepayConfirmUrl: any
}
export interface ILineConfig {
  channelAccessToken: string,
  channelSecret: string,
  channelId: string
}