import {IpcMain, IpcMainEvent, IpcRenderer} from "electron"

export enum CHANNELS {
    TEST_CHANNEL= "TEST_CHANNEL",
    TEST_CHANNEL_WITH_ARGS = "TEST_CHANNEL_WITH_ARGS"
}

export type TArgsTestChannelWithArgs = {
    arg1:string
    arg2:number
}

export interface ITestNameMain extends IpcMain {
    on(channel: CHANNELS.TEST_CHANNEL, listener: (event: IpcMainEvent) => void): this;
    on(channel: CHANNELS.TEST_CHANNEL_WITH_ARGS, listener: (event: IpcMainEvent, args:TArgsTestChannelWithArgs) => void): this;
}

export interface ITestNameRenderer extends IpcRenderer {
    send(channel: CHANNELS.TEST_CHANNEL): void;
    send(channel: CHANNELS.TEST_CHANNEL_WITH_ARGS, args:TArgsTestChannelWithArgs): void;
}