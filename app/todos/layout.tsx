import TodosList from "./TodosList"

export default function RootLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                <TodosList />
            </div>

            <div className="flex-1">
                {children}
            </div>
        </main>
    );
  }