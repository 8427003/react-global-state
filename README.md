# react-global-state

### sample

```
import React, { Component } from 'react'
import { Provider, connect } from '../index.js'

function SubApp ({a, updateA}) {
    return (
        <div>
            <div>{a}</div>
            <button onClick={() => updateA(a + 1)}>plus</button>
        </div>
    )
}

const SubApp1 = connect(SubApp, ({ state, dispatch }) => {
    return {
        a: state.a,
        updateA: (a) => {
            dispatch({
                type: 'UPDATE',
                playload: a,
            })
        }
    }
})
const SubApp2 = connect(SubApp, ({ state, dispatch }) => {
    return {
        a: state.a,
        updateA: (a) => {
            dispatch({
                type: 'UPDATE',
                playload: a,
            })
        }
    }
})

export default class BigApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Provider
                    reducer={(state, action) => {
                        console.log('reduce1....',state, action);
                        switch(action.type) {
                            case 'UPDATE':
                                return {a: action.playload};
                        }
                        return state;
                    }}
                    store={{a: 11}}>
                    <SubApp1 />
                </Provider>
                <Provider
                    reducer={(state, action) => {
                        console.log('reduce2....',state, action);
                        switch(action.type) {
                            case 'UPDATE':
                                return {a: action.playload};
                        }
                        return state;
                    }}
                    store={{a: 22}}>
                    <SubApp2  />
                </Provider>
            </div>
        )
    }
}

```

