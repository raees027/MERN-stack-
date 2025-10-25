import { useEffect, useState } from "react";
import "./App.css";
import { fetchUser } from "./api";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchUser();
      setUserList(response);
    })();
  }, []);
  console.log(userList);
  return <></>;
}

export default App;
