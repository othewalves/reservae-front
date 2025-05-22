
export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="pt-br">
            <h1>Private</h1>
            {children}
        </div>
    );
}