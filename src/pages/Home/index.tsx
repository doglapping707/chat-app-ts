import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Chats from "./components/Chats"

export default function Home() {
    return (
        <div id="home">
            <div className="container">
                <Navbar />
                <Search />
                <Chats />
            </div>
        </div>
    )
}
