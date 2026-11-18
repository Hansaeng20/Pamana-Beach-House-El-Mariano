import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            setProgress(max > 0 ? window.scrollY / max : 0)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <div className="fixed inset-x-0 top-0 z-50 h-[3px]" aria-hidden="true">
            <div
                className="h-full origin-left bg-gradient-to-r from-[#CBB79A] to-[#947A60]"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    )
}
