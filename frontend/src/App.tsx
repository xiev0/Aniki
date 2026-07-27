import "@/App.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function App() {
  return (
    <>
      <header>
          <div>Aniki</div>

          <Input placeholder="Найти..." />

          <Button>Profile</Button>
      </header>

        <aside>

        </aside>

        <main>
            <div className="bg-primary text-primary-foreground">Hello</div>
        </main>

        <footer>

        </footer>
    </>
  )
}

export default App
