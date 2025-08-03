"use client"

import { useRef, useEffect, useState, useCallback } from "react"

interface PixelTransitionOverlayProps {
    isOpen: boolean
    onTransitionEnd: () => void
    onFilled: () => void
    pixelSize?: number
    fillColor?: string
    animationDuration?: number
}

export default function PixelTransitionOverlay({
    isOpen,
    onTransitionEnd,
    onFilled,
    pixelSize = 20,
    fillColor = "#1a1a1a",
    animationDuration = 500,
}: PixelTransitionOverlayProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isCanvasCovered, setIsCanvasCovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const animationFrameId = useRef<number | null>(null)
    const pixelGrid = useRef<boolean[][]>([])
    const pixelCoordinates = useRef<{ x: number; y: number }[]>([])

    console.log("PixelTransitionOverlay rendered. State:", { isOpen, isAnimating, isCanvasCovered, isVisible })

    const initializeCanvas = useCallback(() => {
        console.log("initializeCanvas called.")
        const canvas = canvasRef.current
        if (!canvas) {
            console.error("Canvas ref is null in initializeCanvas!")
            return
        }

        const ctx = canvas.getContext("2d")
        if (!ctx) {
            console.error("Canvas context is null in initializeCanvas!")
            return
        }

        // Set canvas dimensions to match viewport
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        console.log(`Canvas dimensions set to: ${canvas.width}x${canvas.height}`)

        // Clear canvas initially
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Initialize pixel grid and generate all pixel coordinates
        const numCols = Math.ceil(canvas.width / pixelSize)
        const numRows = Math.ceil(canvas.height / pixelSize)
        console.log(`Grid: ${numRows} rows, ${numCols} cols. Total pixels: ${numRows * numCols}`)

        pixelGrid.current = Array(numRows)
            .fill(0)
            .map(() => Array(numCols).fill(false))

        pixelCoordinates.current = []
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                pixelCoordinates.current.push({ x: c, y: r })
            }
        }
        // Shuffle coordinates for random animation order
        pixelCoordinates.current.sort(() => Math.random() - 0.5)
        console.log(`Pixel coordinates array length: ${pixelCoordinates.current.length}`)
    }, [pixelSize])

    const animatePixels = useCallback(
        (fill: boolean) => {
            console.log(`animatePixels called. Fill mode: ${fill}`)
            const canvas = canvasRef.current
            if (!canvas) {
                console.error("Canvas ref is null in animatePixels!")
                return
            }

            const ctx = canvas.getContext("2d")
            if (!ctx) {
                console.error("Canvas context is null in animatePixels!")
                return
            }

            ctx.fillStyle = fillColor

            let currentIndex = 0
            const totalPixels = pixelCoordinates.current.length
            const pixelsPerFrame = Math.max(1, Math.ceil(totalPixels / (animationDuration / 16)))
            console.log(`Animation details: Total pixels: ${totalPixels}, Pixels per frame: ${pixelsPerFrame}`)

            const drawFrame = () => {
                let pixelsProcessedThisFrame = 0
                while (currentIndex < totalPixels && pixelsProcessedThisFrame < pixelsPerFrame) {
                    const { x, y } = pixelCoordinates.current[currentIndex]
                    const col = x
                    const row = y

                    if (pixelGrid.current[row] && typeof pixelGrid.current[row][col] !== "undefined") {
                        if (fill) {
                            if (!pixelGrid.current[row][col]) {
                                ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
                                pixelGrid.current[row][col] = true
                            }
                        } else {
                            if (pixelGrid.current[row][col]) {
                                ctx.clearRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
                                pixelGrid.current[row][col] = false
                            }
                        }
                    }
                    currentIndex++
                    pixelsProcessedThisFrame++
                }

                if (currentIndex < totalPixels) {
                    animationFrameId.current = requestAnimationFrame(drawFrame)
                } else {
                    console.log(`Animation phase complete. Fill: ${fill}`)
                    setIsAnimating(false)
                    if (fill) {
                        setIsCanvasCovered(true)
                        console.log("Calling onFilled(). Canvas covered.")
                        onFilled()
                    } else {
                        setIsCanvasCovered(false)
                        console.log("Calling onTransitionEnd(). Canvas cleared.")
                        onTransitionEnd()
                    }
                }
            }

            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
                console.log("Cancelled previous animation frame.")
            }
            setIsAnimating(true)
            console.log("Starting requestAnimationFrame loop.")
            animationFrameId.current = requestAnimationFrame(drawFrame)
        },
        [pixelSize, fillColor, animationDuration, onTransitionEnd, onFilled],
    )

    // Effect to handle visibility changes
    useEffect(() => {
        if (isOpen && !isVisible) {
            console.log("Making overlay visible")
            setIsVisible(true)
        } else if (!isOpen && !isAnimating && !isCanvasCovered && isVisible) {
            console.log("Hiding overlay")
            setIsVisible(false)
        }
    }, [isOpen, isAnimating, isCanvasCovered, isVisible])

    // Effect to initialize canvas when it becomes visible
    useEffect(() => {
        if (isVisible && canvasRef.current) {
            console.log("Canvas is now available, initializing...")
            initializeCanvas()

            const handleResize = () => {
                console.log("Window resized, reinitializing canvas...")
                initializeCanvas()
            }

            window.addEventListener("resize", handleResize)
            return () => {
                console.log("Cleaning up resize listener")
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [isVisible, initializeCanvas])

    // Effect to trigger animations
    useEffect(() => {
        console.log("Animation trigger effect. State:", {
            isOpen,
            isAnimating,
            isCanvasCovered,
            isVisible,
        })

        if (isVisible && isOpen && !isAnimating && !isCanvasCovered) {
            console.log("Condition met: Starting FILL animation.")
            // Small delay to ensure canvas is fully initialized
            setTimeout(() => animatePixels(true), 50)
        } else if (isVisible && !isOpen && !isAnimating && isCanvasCovered) {
            console.log("Condition met: Starting CLEAR animation.")
            animatePixels(false)
        } else {
            console.log("No animation condition met.")
        }
    }, [isOpen, isAnimating, isCanvasCovered, isVisible, animatePixels])

    // Cleanup effect
    useEffect(() => {
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [])

    // Always render the overlay when it should be visible
    if (!isVisible) {
        return null
    }

    console.log("PixelTransitionOverlay rendering canvas.")
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen || isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            style={{ backgroundColor: "transparent" }}
        >
            <canvas ref={canvasRef} className="block" />
        </div>
    )
}
