import Cookies from 'js-cookie';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      isEditing: false,
      username: '',
      profilePicture: null,
      preview: '',
      showAlert: false,
    }
    this.input = this.input.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/users/profiles/user')
    .then(response => response.json())
    .then(data => this.setState({profile: data}));
  }

  input(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  uploadImage(event) {
    let file = event.target.files[0];
    this.setState({ profilePicture: file, })

    let reader = new FileReader();
    reader.onloadend = () => {this.setState({preview: reader.result,})};
    reader.readAsDataURL(file);
  }

  async editProfile(event) {
    event.preventDefault();
    let formData = new FormData();
    if (this.state.profilePicture) {
        formData.append('profile_picture', this.state.profilePicture);
      }
    if (this.state.username) {
        formData.append('username', this.state.username);
    }

    const options = {
      method: 'PATCH',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    }
      await fetch('/api/v1/users/profiles/user/', options)

      this.setState({isEditing: false});

  }

  render() {
    let isOrganizer = localStorage.getItem("isOrganizer")
    let events = localStorage.getItem("events")
    let volunteers = localStorage.getItem("volunteers")
    let eventsAttended = localStorage.getItem("eventsAttended")

    const alert = [
      <Alert variant="success" onClose={() => this.setState({ showAlert: false})} dismissible>
        <Alert.Heading>Welcome back {this.state.profile.username}!</Alert.Heading>
        <p>
          You've sucessfully logged in! Need help navigating through the site? Click the help icon.
        </p>
      </Alert>
    ]

    return(
      <>
      {this.state.showAlert && alert}
      <form onSubmit={this.editProfile} className="form-profile">
      <section className="section about-section" id="about">
            <div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3>
                              <>
                              {this.state.isEditing
                              ?  <input className= "username" type="text" name="username" value={this.state.username} placeholder={this.state.profile.username} onChange={this.input}/>
                              :  <>{this.state.profile.username}</>
                              }
                              </>
                              <>
                              {this.state.isEditing
                              ? <button type="submit" className="btn">(Save Profile)</button>
                              : <button type="button" key="edit" className="btn" onClick={()=> this.setState({isEditing: true})}>(Edit Profile)</button>
                              }
                              </>
                              </h3>
                            <h6 className="theme-color lead">{isOrganizer === 'false' && `Thank you for being an amazing volunteer!`}</h6>
                            <p>I <mark>created a volunteering platform</mark> for people like you to be matched with amazing volunteering opportunities. Please feel free to explore the site and find what suits your needs.</p>
                            <div className="row about-list">
                                <div className="col-md-6 profile-buttons">
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link className="media" to='/eventlog'>See Event Log</Link>}
                                    {isOrganizer === 'true' &&  <Link to='/organizerEvents'>See Your Events</Link>}
                                    </div>
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to='/eventReviews'>See Your Feedback</Link>}
                                    {isOrganizer === 'true' &&  <Link to='/createEvent'>Create A New Event</Link>}
                                    </div>
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to="/map">Search Events</Link>}
                                    {isOrganizer === 'true' &&  <Link to='/volunteerList'>See Attendees</Link>}
                                    </div>
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to='/gallery'>See your gallery</Link>}
                                    {isOrganizer === 'true' && <Link to='/organizerReviews'>See Your Reviews</Link>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{this.state.profile.email}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            {this.state.isEditing
                              ? <input className="card-img-top" type="file" name="profilePicture" onChange={this.uploadImage}/>
                              : <img src={this.state.profile.profile_picture} title="" alt=""/>
                            }
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">WE</h6>
                                <p className="m-0px font-w-600">Foster Change</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">WE</h6>
                                <p className="m-0px font-w-600">Do Good</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">WE</h6>
                                <p className="m-0px font-w-600">Help Your Community</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">WE</h6>
                                <p className="m-0px font-w-600">Find Your Passion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </form>
      </>
    )
  }
}
export default Profile;
