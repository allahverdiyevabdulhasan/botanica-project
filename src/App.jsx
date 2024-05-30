import { CartProvider } from "react-use-cart"
import AppRouter from "./router"

function App() {

  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  )
}

export default App
