import React from 'react';
import {testNameIpcRenderer, testNameChannels} from './services/electron/testName'

function App() {
    return (
    <div>
        <p>Hello from App!</p>
        <button onClick={()=>testNameIpcRenderer.send(testNameChannels.TEST_CHANNEL)}>TEST IPC</button>
        <button onClick={()=>testNameIpcRenderer.send(testNameChannels.TEST_CHANNEL_WITH_ARGS, {arg1:"superString", arg2:1212})}>TEST IPC WITH ARGS</button>
    </div>
  );
}

export default App;
