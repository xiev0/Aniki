import "@/App.css"
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar"

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
        <aside>
            <SidebarProvider>
                <div className="flex h-screen">
                    <Sidebar>
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarMenu>
                                    <SidebarMenuItem>Главная</SidebarMenuItem>
                                    <SidebarMenuItem>Проекты</SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>

                    <main className="flex-1 overflow-auto">
                        <div className="p-4">
                            <SidebarTrigger />
                            {children}
                        </div>
                    </main>
                </div>
            </SidebarProvider>

        </aside>
    </>
  )
}

export default App
