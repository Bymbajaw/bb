import React, { useState } from "react";

export default function LoginModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("clicked");
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal btn btn-primary login">
        <p>login</p>
      </button>

      {modal && (
        <div
          className="modal"
          onClick={toggleModal}
          style={{ display: modal ? "block" : "none" }}
        >
          <div className="overlay" onClick={(e) => e.stopPropagation()}>
            <div className="modal-box">
              <div className="modal-content">
                <div className="close-icon" onClick={toggleModal}>
                  <i class="bi bi-x-lg"></i>
                </div>
                <h2>Welcome back</h2>
                <button className="btn btn-control google-btn">
                  <img src={require("../image/google.png")} alt="google img" />
                  Sign in with Facebook
                </button>
                <button className="btn btn-control facebook-btn">
                  <img
                    src={require("../image/facebook.png")}
                    alt="google img"
                  />
                  Sign in with Facebook
                </button>
                <button className="btn btn-control apple-btn">
                  <img src={require("../image/apple.png")} alt="google img" />
                  Sign in with Facebook
                </button>
                <button className="btn btn-control twitter-btn">
                  <img src={require("../image/twitter.png")} alt="google img" />
                  Sign in with Facebook
                </button>
                <button className="btn btn-control email-btn">
                  <img src={require("../image/email.png")} alt="google img" />
                  Sign in with Facebook
                </button>
                <div className="create-one">
                  <p>
                    No account? <b>Create one</b>
                  </p>
                </div>

                <div className="get-help">
                  <p>
                    Forgot email or trouble signing in?
                    <a href="#"> Get help.</a>
                  </p>
                </div>
                <div className="privacy">
                  <p>
                    Click “Sign In” to agree to Medium’s
                    <a href="#"> Terms of Service </a> and acknowledge that
                    Medium’s <a href="#">Privacy Policy</a> applies to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
