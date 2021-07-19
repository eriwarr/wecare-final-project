import { Component } from 'react';


class ContactUs extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section id="contact" className="content-section text-center">
              <div className="contact-section">
                  <div className="container">
                    <h2>Contact Us</h2>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label for="exampleInputName2">Name</label>
                            <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail2">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                          </div>
                          <div className="form-group ">
                            <label for="exampleInputText">Your Message</label>
                           <textarea  className="form-control" placeholder="Description"></textarea>
                          </div>
                          <button type="submit" className="btn btn-default">Send Message</button>
                        </form>
                        <hr/>
                  </div>
              </div>
            </section>
    )
  }
}
export default ContactUs;
