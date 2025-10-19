import Card from "./components/card"


const App = () => {

  const users = [
  {
    name: "Alice Johnson",
    age: 24,
    description: "Frontend developer who loves building sleek, interactive UIs.",
    follows: 120,
    likes: 540,
    image: "https://picsum.photos/seed/alice/200"
  },
  {
    name: "Brian Lee",
    age: 29,
    description: "Tech enthusiast and part-time content creator.",
    follows: 300,
    likes: 1250,
    image: "https://picsum.photos/seed/brian/200"
  },
  {
    name: "Chloe Smith",
    age: 22,
    description: "Designer passionate about minimalism and typography.",
    follows: 180,
    likes: 890,
    image: "https://picsum.photos/seed/chloe/200"
  },
  {
    name: "David Kim",
    age: 27,
    description: "Full-stack engineer solving real-world problems with code.",
    follows: 250,
    likes: 1020,
    image: "https://picsum.photos/seed/david/200"
  },
  {
    name: "Ella Brown",
    age: 31,
    description: "Digital marketer focused on social media and analytics.",
    follows: 400,
    likes: 2100,
    image: "https://picsum.photos/seed/ella/200"
  },
  {
    name: "Frank Wilson",
    age: 26,
    description: "Backend developer who enjoys working with Node.js and databases.",
    follows: 150,
    likes: 760,
    image: "https://picsum.photos/seed/frank/200"
  },
  {
    name: "Grace Miller",
    age: 23,
    description: "UI/UX designer crafting seamless mobile experiences.",
    follows: 220,
    likes: 970,
    image: "https://picsum.photos/seed/grace/200"
  },
  {
    name: "Henry Adams",
    age: 28,
    description: "Data analyst passionate about transforming data into insights.",
    follows: 310,
    likes: 1450,
    image: "https://picsum.photos/seed/henry/200"
  },
  {
    name: "Ivy Parker",
    age: 25,
    description: "Software tester with a keen eye for user experience and quality.",
    follows: 190,
    likes: 840,
    image: "https://picsum.photos/seed/ivy/200"
  },
  {
    name: "Jack Thompson",
    age: 30,
    description: "Product manager with a love for technology and innovation.",
    follows: 380,
    likes: 2000,
    image: "https://picsum.photos/seed/jack/200"
  }
];


  return (
    <div className="parent">  
      {users.map(function (elem, idx) {
        return <div key={idx}>
          <Card name={elem.name} age={elem.age} image={elem.image} follows={elem.follows} likes={elem.likes} description={elem.description}/>
        </div>
      })}
    </div>
  )
}

export default App