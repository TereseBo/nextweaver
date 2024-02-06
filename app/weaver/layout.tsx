'use client'
import { WeaveProviderWrapper } from '@/contexts/WeaveProviderWrapper'

export default function WeaverBaseLayout({
    children,
}: {
    children:  React.ReactElement 
}) {
    return (
        <>
            <main>  <WeaveProviderWrapper>{children}</WeaveProviderWrapper></main>
            <footer></footer>
        </>

    )
}
