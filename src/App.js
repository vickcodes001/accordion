import Accordion from "./components/Accordion";

const items = [
  {
    id: 1,
    label: "Who is Jiggy and what makes him stand out?",
    content:
      "Jiggy is the kind of guy who enters a room and shifts the vibe in a good way. He is full of energy, always dressed with style, and never afraid to speak his mind. What makes him stand out? His confidence, his rhythm (on and off the dance floor), and the way he turns everyday moments into memorable ones.",
  },
  {
    id: 2,
    label: "What does Jiggy do for a living?",
    content:
      "By day, Jiggy is a creative consultant. Helping brands find their voice through bold visuals, catchy campaigns, and sometimes, a little choreography. He freelances across fashion, music, and tech. If it is got flavor, Jiggy probably behind it.",
  },
  {
    id: 3,
    label: "Why do people call him Jiggy?",
    content:
      "The nickname “Jiggy” came from his high school days when he danced so smoothly at a talent show that the crowd started chanting it. It stuck. Now, it is more than a name. It is a whole personality.",
  },
  {
    id: 4,
    label: "What are Jiggy's hobbies or interests?",
    content:
      "Jiggy loves street dancing, graphic design, vintage sneakers, late-night food hunts, and hosting chill rooftop sessions with good music and even better company. He is also into photography and spontaneous travel.",
  },
  {
    id: 5,
    label: "What is one fun fact most people do not know about Jiggy?",
    content:
      "Despite his loud style, Jiggy writes poetry, you know, deep, introspective stuff. He even has a secret notebook filled with verses he is never shared. Not everything about Jiggy is on display and that is part of his charm.",
  },
];

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800">
      <Accordion items={items} />
    </div>
  );
}

export default App;
