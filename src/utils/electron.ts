import {IpcRenderer} from "electron";
declare global {
    interface window { ipcRenderer: IpcRenderer}
}
export const {ipcRenderer} = window.require('electron')
