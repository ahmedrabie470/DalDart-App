import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
export let PostsContext = createContext();

export default function PostsContextProvider(props) {
  let { accessToken} = useContext(AuthContext);
  const [newPosts, setNewPosts] = useState([]);
  const [risingPosts, setRisingPosts] = useState([]);
  const [hotPosts, setHotPosts] = useState([]);



useEffect(() => { 
  //to get all posts once the component is mount
 if(accessToken){
  async function getData(key, cbf , type) {
  const response = await axios.get(
      `https://oauth.reddit.com/r/FlutterDev/${key}?limit=10`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    //Store Date In FireBase
    cbf(response.data.data.children);
    await axios.post(
      `https://daldart-app-15f5e-default-rtdb.firebaseio.com/${type}.json`,
      response.data.data.children
    );
  }
    getData("new", setNewPosts , 'NewData');
    getData("rising", setRisingPosts , 'RisingData');
    getData("hot", setHotPosts , 'HotData');
}
  }, [accessToken]);

  async function getNewData(key, postId, cbf) {
    //to get the posts in the next and previous page

    const response = await axios.get(
      //path post id to get the next 10 page after this post and the key is the category ['new' || 'hot' || 'rising' ]
      //and also path cbf to use set state when calling this function in the different com
      `https://oauth.reddit.com/r/FlutterDev/${key}?limit=10&after=${postId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    //Store Date In FireBase
    cbf(response.data.data.children);
    await axios.post(
      "https://daldart-app-57767-default-rtdb.firebaseio.com/data.json",
      response.data.data.children
    );
  }
  return (
    <>
      <PostsContext.Provider
        value={{
          newPosts,
          risingPosts,
          hotPosts,
          setHotPosts,
          setNewPosts,
          setRisingPosts,
          getNewData,
        }}
      >
        {props.children}
      </PostsContext.Provider>
    </>
  );
}
