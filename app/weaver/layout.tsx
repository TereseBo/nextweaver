


export default function WeaverBaseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>

            <main>{children}</main>
            <footer></footer>
        </>

    )
}
