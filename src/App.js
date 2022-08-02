import { useState, useEffect } from "react";
import Category from "./components/Category";
import Discussions from "./components/Discussions";
import Header from "./components/Header";
import getRepository from "./getRepository";

function App() {
  let [discussionObj, setDiscussionObj] = useState({});
  const { discussionCategories, discussions } = discussionObj;

  useEffect(() => {
    getRepository()
      .then((data) => {
        setDiscussionObj(data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <div className="main">
        <Header />
        <div className="main__wrapper"></div>
        <Category category={discussionCategories} />
        {discussions !== undefined ? (
          <Discussions discussions={discussions.edges}></Discussions>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;
