import React, { createContext } from 'react'
import Datas from './Datas'


const dats = createContext()

const A = () => {
    const ak = "Akash"
    // // let Ak = [
    //     {
    //         name: "Akash",
    //         sn: "Rawal"
    //     },
    //     {
    //         name: "Yogesh",
    //         sn: "Tank"
    //     }
    // ]
    return (
        <dats.Provider value={ak}>
            <Datas/>
        </dats.Provider>

    )
}

export default A
export { dats }
