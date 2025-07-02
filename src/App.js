import { useState } from "react";
import Accordion from "./components/Accordion";
import User from "./components/userDetail/User";



function App() {
  const [sharedName, setSharedName] = useState("");
  const [showOverlay, setShowOverlay] = useState(true);
  const [nickname, setNickname] = useState("")
  const [items, setItems] = useState ([
  {
    id: 1,
    label: "What makes you stand out?",
    content:
      "",
  },
  {
    id: 2,
    label: "What do you do for a living?",
    content:
      "",
  },
  {
    id: 3,
    label: "How was your nickname given?",
    content:
      "",
  },
])

  const handleAnswerSubmit = (answersArray) => {
    const updatedItems = items.map((item, index) => ({
      ...item,
      content: answersArray[index] || "",
    }))
    setItems(updatedItems);
    setShowOverlay(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center relative bg-gray-800 py-10">
      {showOverlay ? (
        <div className="flex items-center justify-center absolute z-30 w-full h-full bg-gray-800/95">
          <User onAnswerSubmit={handleAnswerSubmit} onNicknameChange={setNickname} />
        </div>
      ) : (
        <Accordion items={items} nickname={nickname} />
      )}
    </div>
  );
}

export default App;
