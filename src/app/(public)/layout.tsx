
export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="pt-br">
            <h1>Public</h1>
            {children}
        </div>
    );
}