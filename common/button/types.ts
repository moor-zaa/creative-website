import { ReactNode } from "react"

export type ButtonProps = {
    containerClass?: string,
    id?: string,
    title: string,
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}