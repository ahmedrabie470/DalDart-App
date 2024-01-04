import React, { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { PostsContext } from "../Context/PostsContext/PostsContext";
import { Link } from "react-router-dom";

function NewPosts() {
  let { newPosts, getNewData, setNewPosts } = useContext(PostsContext);
  const postId = newPosts.map((post_id) => {
    return post_id.data?.name;
  });
 
  function getNextPage(key, id, cbf) {
    getNewData(key, id, cbf);
  }
  
  return (
    <>
      {newPosts.length > 0 ? (
        <div className="container animate__animated animate__fadeIn  d-flex justify-content-center  py-2 ">
          <div className="row p-5 ">
            <div>
              <div>
                {newPosts?.map((post) => (
                  <Link to={`https://oauth.reddit.com/${post.data.permalink}`} key={post?.data.id}>
                  <div
                    className="  mb-5 bg-dark-subtle p-4 rounded-3 post "
                  >
                    <span className="badge bg-success rounded-pill text-white  text-dark p-1 m-2">
                      {post.data.link_flair_text}
                    </span>
                    <div className="row  d-flex">
                      <div className="text-white  col-md-1">
                        <button className="btn mx-1 text-white">
                          <i className="fa-solid fa-up-long "></i>
                        </button>
                        <span>
                          <div className="mx-3">{post.data.ups}</div>
                        </span>
                        <button className="btn mx-1 text-white">
                          <i className="fa-solid fa-down-long text-white"></i>
                        </button>
                      </div>
                      <div className="col-md-11 ">
                        <div className="mx-2">
                          <span className="">Posted By:</span> <span className="text-dark">
                              
                              u/
                              {post.data.author}</span>
                        </div>
                        <div className="mt-1">
                          <h4 className="text-dark mt-2 mx-2 h6">
                            {post.data.title.split(" ").slice(0, 15).join(" ")}
                          </h4>
                          <h4 className="text-dark mt-2 mx-2 h6">
                            {post.data.selftext
                              .split(" ")
                              .slice(0, 10)
                              .join(" ")}
                          </h4>
                        </div>
                        <div className="mx-2">
                        <img
                          width={250}
                          src={post.data.thumbnail}
                          alt=""
                        />
                      </div>
                      </div>
                    </div>

                    
                    <div className="d-flex   align-items-center ">
                      <button className="btn bg-white rounded-pill  mx-2 my-2 px-2 text-center">
                        <i className="fa-regular fa-comment mx-1"></i>
                        <span>{post.data.num_comments} Comments</span>
                      </button>

                      <button className="btn rounded-pill bg-white mx-2 my-2 px-2 text-center">
                        <i className="fa-regular fa-share-from-square mx-3"></i>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
              <div>
                {" "}
                <div className="text-center">
                  <button
                    onClick={() =>
                      getNextPage("new", postId[null], setNewPosts)
                    }
                    className="btn post bg-body-secondary mx-2"
                  >
                    <i className="fa-solid fa-arrow-left"></i>{" "}
                  </button>
                  <button
                    onClick={() => getNextPage("new", postId[9], setNewPosts)}
                    className="btn post bg-body-secondary mx-2"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-page w-100 vh-100  d-flex justify-content-center align-items-center ">
          <InfinitySpin width="200" color="#007373" />
        </div>
      )}
    </>
  );
}
export default NewPosts;