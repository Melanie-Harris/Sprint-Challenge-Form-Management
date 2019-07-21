import React, {useState} from 'react'


export function useLocalStateHook(key) {// takes key to identify the slot in local storage
    
    // Map the localStorage key value to react state by default
    //use react state and map the initial value to localStore
    const [localStoreVal, setLocalStoreVal]= useState(localStorage.getItem(key))

    // Provide a setter similar to useState for setting:
    // 1 -- the local storage value
    // 2 -- the state value
    const setLocalStateVal = (key, value) => {
        localStorage.setItem(key, value)
        setLocalStoreVal(value)
    }

    // Return the react state value that is mimicking the localStorage value
    // As well as the setter for the local storage/react state value
    return [
        localStoreVal, 
        setLocalStateVal
    ]
}

