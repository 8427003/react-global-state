# react-global-state

### sample

```
// store.js

import createStore from '../index.js'

const store = {
    name: "init2"
}

const { Provider, withStore } = createStore(store);

export {
    Provider,
    withStore
}

```

```
// main.js
import { Provider, withStore } from './store.js' 

function PPP(props) {
    const handle = () => {
        props.setGlobalState({name: 'handle'})
    }
    return (
        <div>
            <div>{props.name}</div>
            <button onClick={handle}>handle</button>
        </div>
    )
}

const WrappedPPP= withStore(PPP, ({ globalState, setGlobalState }) => {
    return {
        name: globalState.name,
        other: globalState.other,
        setGlobalState,
    }
});

export default function () { 
    return (
        <Provider>
            <WrappedPPP />
        </Provider>
    )
}
```

