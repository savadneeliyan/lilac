import React from 'react'
import './notification.css'
function Notification() {
  return (
    <div className="notification">
      <div className="notification-container active">
        <div className="notification-logo edumpus">
          <img src="/assets/images/edumpus.png" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">Edumpus</span>
            <span>commented on your post</span>
          </div>
          <div className="time">Now</div>
        </div>
      </div>
      <div className="notification-container active">
        <div className="notification-logo ">
          <img src="https://randomuser.me/api/portraits/women/91.jpg" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">Snaillogkyanitesnake</span>
            <span>Applied a new syllabus course as sample text like this is ui</span>
          </div>
          <div className="time">5 min ago</div>
        </div>
      </div>
      <div className="notification-container">
        <div className="notification-logo ">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">Jennifer Lopez</span>
            <span>applied science and technology degree courses</span>
          </div>
          <div className="time">1 hrs ago</div>
        </div>
      </div>
      <div className="notification-container">
        <div className="notification-logo ">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">Molly Morgan</span>
            <span>replied your comment</span>
          </div>
          <div className="time">1 day ago</div>
        </div>
      </div>
      <div className="notification-container">
        <div className="notification-logo ">
          <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">Danny Miles</span>
            <span>commented on your post</span>
          </div>
          <div className="time">3 week ago</div>
        </div>
      </div>
      <div className="notification-container">
        <div className="notification-logo ">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">Haris web design</span>
            <span>commented on your post</span>
          </div>
          <div className="time">1 month ago</div>
        </div>
      </div>
      <div className="notification-container">
        <div className="notification-logo ">
          <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" />
        </div>
        <div>
          <div className="message">
            <span className="name">john due</span>
            <span>commented on your post</span>
          </div>
          <div className="time">14 jan 2021</div>
        </div>
      </div>
    </div>
  );
}

export default Notification