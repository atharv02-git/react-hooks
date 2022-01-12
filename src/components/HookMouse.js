import { useEffect, useState } from "react"

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)

        // cleanup to cancel all subscriptions
        return () => {
            console.log('cleanup function called')
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
