import {ipcMain as _ipcMain} from "electron"
import {ITestNameMain, CHANNELS} from "./types"

const ipcMain:ITestNameMain = _ipcMain

export const serveTestName = () => {
    ipcMain.on(CHANNELS.TEST_CHANNEL, () =>{
        console.log("\n\n🚨‍🦽🐐 ==========> __DEBUG__LOG__ ~ line:7 ~ file:testName.ts ~ TEST_CHANNEL\n\n");
    })
    ipcMain.on(CHANNELS.TEST_CHANNEL_WITH_ARGS, (event, {arg1, arg2}) => {
        console.log("\n\n🚨‍🦽🐐 ==========> __DEBUG__LOG__ ~ line:10 ~ file:testName.ts ~ TEST_CHANNEL_WITH_ARGS arg1, arg2", arg1, arg2, "\n\n");
    })
}