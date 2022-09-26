import {ipcRenderer as _ipcRenderer} from '../../../utils/electron'
import {ITestNameRenderer, CHANNELS} from '../../../electron/ipcServices/testName/types'
const ipcRenderer:ITestNameRenderer = _ipcRenderer
export {ipcRenderer, CHANNELS}