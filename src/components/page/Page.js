import React, { useState } from 'react'
import './page.css'
function Page() {

  const [inputValue, setInputValue] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [values, setValues] = useState([]);
  const [reply, setReply] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReplyValue(e.target.value);
  };

  const handlereply = () => {
    if (replyValue.trim() !== "") {
      setReply([...reply, replyValue]);
      setReplyValue("");
    }
    // console.log(reply)
  };
  const handlesubmit = () => {
    if (inputValue.trim() !== "") {
      setValues([...values, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="heading">
        <div className="heading-container">
          <img
            src="https://edumpus.com/getpublic/storage/icons/university_logo/1598613710_Greenwich.jpg"
            alt=""
          />
          <div>
            <h2>university of Greenwich</h2>
            <span>3 days ago</span>
          </div>
        </div>
        <div className="body">
          <p>Dear Students!</p>
          <br />
          <br />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <br />
          <br />
          <p>
            - contact Edumpus FREE Counselling & make your Overseas Career dream
            reality
          </p>
          <p>- Students can also DM us for further details </p>
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="comments">
          <div className="comment-list">
            <span>7 Comments</span>
            <span>2 Replies</span>
          </div>
          <div className="add-reply">
            <img
              src="https://edumpus.com/getpublic/storage/icons/university_logo/1598613710_Greenwich.jpg"
              alt=""
            />
            <div className="reply-text">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                name=""
                id="comment"
                placeholder="Add a comment..."
                cols="30"
                rows="5"
              ></textarea>
              <button onClick={handlesubmit}>Post</button>
            </div>
          </div>
          <h3 className="view-comments">View 5 more comments</h3>
          {values.map((value, index) => (
            <div key={index}>
              <div className="post-reply">
                <img
                  src="https://randomuser.me/api/portraits/men/89.jpg"
                  alt=""
                />
                <div>
                  <div className="reply-container">
                    <div className="reply-container-head">
                      <h4 className="name">roshan karthik</h4>

                      <span>Now</span>
                    </div>
                    <p>{value}</p>
                  </div>
                  <div>
                    <div className="reply-head "></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="post-reply">
            <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />
            <div>
              <div className="reply-container">
                <div className="reply-container-head">
                  <h4 className="name">roshan karthik</h4>

                  <span>1 week ago</span>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam
                </p>
              </div>
              <div>
                <div className="reply-head ">
                  <svg
                    width="20"
                    height="8"
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4809 4.8C14.6725 6.22222 12.3265 7.11111 9.73607 7.11111C5.19062 7.11111 1.34897 4.41778 0 0.693333L2.30694 -5.96046e-08C2.82178 1.42223 3.81706 2.66045 5.151 3.53827C6.48493 4.41609 8.08948 4.88874 9.73607 4.88889C11.6422 4.88889 13.3822 4.24889 14.741 3.21778L11.2023 -5.96046e-08H20V8L16.4809 4.8Z"
                      fill="black"
                    />
                  </svg>

                  <h4 className="name">3 replies</h4>
                  <span>Reply</span>
                </div>
              </div>
              <div className="post-reply inside">
                <img
                  src="https://edumpus.com/getpublic/storage/icons/university_logo/1598613710_Greenwich.jpg"
                  alt=""
                />
                <div>
                  <div className="reply-container">
                    <div className="reply-container-head">
                      <h4 className="name">roshan karthik</h4>

                      <span>1 week ago</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste</p>
                  </div>
                </div>
              </div>
              <div className="post-reply inside">
                <img
                  src="https://randomuser.me/api/portraits/men/89.jpg"
                  alt=""
                />
                <div>
                  <div className="reply-container">
                    <div className="reply-container-head">
                      <h4 className="name">roshan karthik</h4>

                      <span>1 week ago</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-reply inside">
                <img
                  src="https://edumpus.com/getpublic/storage/icons/university_logo/1598613710_Greenwich.jpg"
                  alt=""
                />
                <div>
                  <div className="reply-container">
                    <div className="reply-container-head">
                      <h4 className="name">roshan karthik</h4>

                      <span>1 week ago</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                  </div>
                </div>
              </div>
              {reply.map((value, index) => (
                <div className="post-reply inside">
                  <img
                    src="https://edumpus.com/getpublic/storage/icons/university_logo/1598613710_Greenwich.jpg"
                    alt=""
                  />
                  <div>
                    <div className="reply-container">
                      <div className="reply-container-head">
                        <h4 className="name">roshan karthik</h4>

                        <span>Now</span>
                      </div>
                      <p>{value}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="post-reply inside">
                <img
                  src="https://edumpus.com/getpublic/storage/icons/university_logo/1598613710_Greenwich.jpg"
                  alt=""
                />
                <div className="reply-input">
                  <input
                    type="text"
                    placeholder="Add a reply..."
                    name=""
                    value={replyValue}
                    onChange={handleReplyChange}
                  />
                  <button onClick={handlereply}>Reply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="post-reply">
            <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />
            <div>
              <div className="reply-container">
                <div className="reply-container-head">
                  <h4 className="name">roshan karthik</h4>

                  <span>1 week ago</span>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam
                </p>
              </div>
              <div>
                <div className="reply-head ">
                  <svg
                    width="20"
                    height="8"
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4809 4.8C14.6725 6.22222 12.3265 7.11111 9.73607 7.11111C5.19062 7.11111 1.34897 4.41778 0 0.693333L2.30694 -5.96046e-08C2.82178 1.42223 3.81706 2.66045 5.151 3.53827C6.48493 4.41609 8.08948 4.88874 9.73607 4.88889C11.6422 4.88889 13.3822 4.24889 14.741 3.21778L11.2023 -5.96046e-08H20V8L16.4809 4.8Z"
                      fill="black"
                    />
                  </svg>
                  <h4 className="name">3 replies</h4>

                  <span>Reply</span>
                </div>
                <a href="#comment" className="view-comments">
                  Add a comment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page