import Cookies from 'js-cookie';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      isEditing: false,
      username: '',
      profilePicture: null,
      preview: '',
    }
    this.input = this.input.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/users/profiles/user')
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
      await fetch('api/v1/users/profiles/user/', options)
      this.setState({isEditing: false});

  }

  render() {
  
    let isOrganizer = localStorage.getItem("isOrganizer")
    let events = localStorage.getItem("events")
    let volunteers = localStorage.getItem("volunteers")
    let eventsAttended = localStorage.getItem("eventsAttended")
    return(
      <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">{this.state.profile.username}</h3>
                            <h6 className="theme-color lead">{isOrganizer === 'false' && `Thank you for being an amazing volunteer!`}</h6>
                            <p>I <mark>created a volunteering platform</mark> for people like you to be matched with amazing volunteering opportunities. Please feel free to explore the site and find what suits your needs.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to='/eventlog'>See Event Log</Link>}
                                    {isOrganizer === 'true' &&  <Link to='/organizerEvents'>See Your Events</Link>}
                                    </div>
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to='/eventReviews'>See Your Feedback</Link>}
                                    {isOrganizer === 'true' &&  <Link to='/createEvent'>Create A New Event</Link>}
                                    </div>
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to="/">See Events</Link>}
                                    {isOrganizer === 'true' &&  <Link to='/volunteerList'>See Attendees</Link>}
                                    </div>
                                    <div className="media">
                                    {isOrganizer === 'false' && <Link to='/gallery'>See your gallery</Link>}
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
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={this.state.profile.profile_picture} title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">{isOrganizer === 'true' && events}{isOrganizer === 'false' && eventsAttended}</h6>
                                <p className="m-0px font-w-600">{isOrganizer === 'true' && 'Events Organized'}{isOrganizer === 'false' && 'Commitments'}</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">{isOrganizer === 'true' && volunteers} {isOrganizer === 'false' && 'WE'}</h6>
                                <p className="m-0px font-w-600">{isOrganizer === 'true' && 'Volunteers Total'} {isOrganizer === 'false' && 'Do Good'}</p>
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
    )
  }
}
export default Profile;
