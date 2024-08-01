import React from "react";
import "./FeedBack.css";
function FeedBack() {
  return (
    <div className="container-fluid">
      <div className="container feedback-container">
        <h5>Please Send Us Your Feedback</h5>
        <div className="row d-flex">
          <div className="col-12 col-md-6">
            <form action="">
              <input type="email" placeholder="Email" required />
              <textarea
                placeholder="Your feedback"
                rows="2"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <img src="https://via.placeholder.com/300" alt="Feedback Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
