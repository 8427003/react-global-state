import React, { Component } from 'react'

function PPP(props) {
    const handleFunc = () => {
        props.setGlobalState(state => {
            return {
                name: 'handleFunc'
            }
        })
    }
    const handleFuncCallback = () => {
        props.setGlobalState(state => {
            return {
                name: 'handleFuncCallback'
            }
        }, () => {
            console.log('handleFuncCallback================');
        })
    }
    const handle = () => {
        props.setGlobalState({name: 'handle'})
    }
    const handleCallback = () => {
        props.setGlobalState({name: 'handleCallback'}, () => {
            console.log('handleCallback=================')
        })
    }
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.other}</div>
            <button onClick={handleFunc}>handleFunc</button>
            <button onClick={handleFuncCallback}>handleFuncCallback</button>
            <button onClick={handle}>handle</button>
            <button onClick={handleCallback}>handleCallback</button>
        </div>
    )
}

function PP(props) {
    return [
        <div>Hello {props.name}</div>,
        props.children
    ]
}

export { PP, PPP};

