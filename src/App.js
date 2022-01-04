import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // It is necessary to add cleanup function after an event listener so that if the app component is destroyed or gets unmount the event listener will be removed automatically
    window.removeEventListener("resize", handleResize);
  })

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
      {/* {items.map((item) => <pre key={item.id}>{JSON.stringify(item)}</pre>)} */}
      <div>{windowWidth}</div>
    </>
  );
}
