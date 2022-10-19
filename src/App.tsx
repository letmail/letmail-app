import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import AppWindow from "./components/appWindow";
import Menu from "./components/menu";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <AppWindow />
      <div className="flex bg-slate-100">
        <Menu />
        <div>
          <h1>Welcome to Tauri!</h1>
          <div>nihj</div>
          <p>Click on the Tauri, Vite, and React logos to learn more.</p>

          <div>
            <div>
              <input
                id="greet-input"
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="Enter a name..."
              />
              <button type="button" onClick={() => greet()}>
                按钮
              </button>
            </div>
          </div>
          <p>{greetMsg}</p>
        </div>
      </div>
    </>
  );
}

export default App;
