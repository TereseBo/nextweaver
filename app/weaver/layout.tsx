


export default function WeaverBaseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header >
                <div>Nav goes here</div>
            </header>
            <main>{children}</main>
            <footer></footer>
        </>

    )
}
