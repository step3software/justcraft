'use client'

import {useState} from "react";
import Short from "@/app/views/short";
import {Item} from "@/app/classes/Item";

export default function Player() {
    const [inventory, setInventory] = useState([]);

    function gather(){
        setInventory(inventory.concat(new Item("stone")));
    }

    return (
        <>
            <div>
                <button onClick={gather}>Gather Stones</button>
            </div>
            <div>
                {inventory.map(item => <Short anything={item}/>)}
            </div>
        </>
    )
}