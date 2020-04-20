import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="box last">
          <div className="row">
            <div className="col-sm-6">
              <h1>Contact Form</h1>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
              <div className="status alert alert-success"></div>
              <form
                id="main-contact-form"
                className="contact-form"
                name="contact-form"
                method="post"
                action="sendemail.php"
                role="form"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        required="required"
                        className="form-control"
                        rows="8"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-danger btn-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-6 connect">
              <h1>Our Address</h1>
              <div className="row">
                <div className="col-md-6">
                  <address>
                    <strong>Twitter, Inc.</strong>
                    <br />
                    795 Folsom Ave, Suite 600
                    <br />
                    San Francisco, CA 94107
                    <br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
              </div>
              <h1>Connect with us</h1>
              <div className="row">
                <div className="col-md-6">
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icon-facebook icon-social"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-google-plus icon-social"></i> Google Plus
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-pinterest icon-social"></i> Pinterest
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
