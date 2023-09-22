import React from 'react'
import './card.css'

function Card() {
  return (
    <div className="card-wrapper">
      <div className="card wrapper">
        <div className="card-container">
          <div className="card-head">
            <div className="card-head-container">
              <div className="card-img">
                <img
                  src="https://randomuser.me/api/portraits/men/81.jpg"
                  alt=""
                />
                <div className="tick">
                  <i className="fa-solid fa-check"></i>
                </div>
              </div>
              <div className="card-name">
                <div className="name">
                  <h2>charlotte rossalie</h2>
                  <span>EDU-IND-66444081</span>
                </div>
              </div>
            </div>
            <div className="edit">
              <i className="fa-solid fa-pen"></i>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-container">
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="full">
                  <span>+91 7510827929</span>
                </div>
              </div>
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-envelope-open"></i>
                </div>
                <div className="full">
                  <span>mymail@rihanasinger.com</span>
                </div>
              </div>
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="full">
                  <span>MSc Business with international management</span>
                </div>
              </div>
            </div>
            <div className="card-body-bottom">
              <span>Add Your Rest Document</span>
              <div className="bottom-logo">
                <img src="/assets/images/edumpus.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card wrapper">
        <div className="card-container">
          <div className="card-head">
            <div className="card-head-container">
              <div className="card-img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              </div>
              <div className="card-name">
                <div className="name">
                  <h2>charlotte rossalie</h2>
                  <span>EDU-IND-66444081</span>
                </div>
              </div>
            </div>
            <div className="new">
              <span>new</span>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-container">
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="full">
                  <span>+91 7510827929</span>
                </div>
              </div>
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-envelope-open"></i>
                </div>
                <div className="full">
                  <span>mymail@rihanasinger.com</span>
                </div>
              </div>
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="full">
                  <span>MSc Business with international management</span>
                </div>
              </div>
            </div>
            <div className="card-body-bottom">
              <span>applied</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card wrapper">
        <div className="card-container">
          <div className="card-head">
            <div className="card-head-container">
              <div className="card-img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              </div>
              <div className="card-name">
                <div className="name">
                  <h2>charlotte rossalie</h2>
                  <span>EDU-IND-66444081</span>
                </div>
              </div>
            </div>
            <div className="new">
              <span>new</span>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-container">
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="full">
                  <span>+91 7510827929</span>
                </div>
              </div>
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-envelope-open"></i>
                </div>
                <div className="full">
                  <span>mymail@rihanasinger.com</span>
                </div>
              </div>
              <div className="card-items">
                <div className="icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="full">
                  <span>MSc Business with international management</span>
                </div>
              </div>
            </div>
            <div className="card-body-bottom">
              <span>Add Your Rest Document</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card