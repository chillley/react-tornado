import React, {useState} from "react"
import {Button} from "@arco-design/web-react";

export default function main() {
    let [count, setCount] = useState(0)
    const onAddCountClick = () => {
        count++
        setCount(count)
    }
    return (
        <div className={'main'}>
            <p>{count}</p>
            <Button onClick={onAddCountClick}>点击添加count</Button>
        </div>
    )

}
