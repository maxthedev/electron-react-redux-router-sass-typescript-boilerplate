import { app, BrowserWindow } from 'electron';
import * as path from "path"
import {serveAllServices} from './ipcServices'
serveAllServices()

const isDev = () => {
    if(!process.env.NODE_ENV) return false;
    return process.env.NODE_ENV === "development"
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    if(isDev()) return win.loadURL("http://localhost:3000")
    return win.loadFile(path.resolve(__dirname, "../index.html"))
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});