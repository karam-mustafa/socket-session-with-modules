import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Echo from "laravel-echo";
import io from "socket.io-client";
import Pusher from "pusher-js";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const echo = new Echo({
      broadcaster: "pusher",
      key: "focalx", // replace with your Pusher key
      encrypted: true,
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,
      cluster: "eu",
      enabledTransports: ["ws", "wss"], // Ensure that only ws and wss are enabled
    });

    echo
      .channel("chat") // replace with your channel name
      .listen(".new-message", (e) => {
        console.log(e);
        // handle new messages here
      });

      // echo.join('pusher').whisper('event', { your: 'data' });

  }, []);

  return (
    <>
      <p className="read-the-docs">{message}</p>
    </>
  );
}

export default App;
