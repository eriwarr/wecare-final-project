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

    return(
      <form onSubmit={this.editProfile}>
        <div className="container">
          <h2>{this.state.profile.username}</h2>
            <div className="card">
              {this.state.isEditing
                ? <input className="card-img-top" type="file" name="profilePicture" onChange={this.uploadImage}/>
                : <img className="card-img-top" src={this.state.profile.profile_picture} alt="profile"/>
              }
              <div className="card-body">

              {this.state.isEditing
                ? <input className="card-title" type="text" name="username" value={this.state.username} onChange={this.input} placeholder={this.state.profile.username}></input>
                : <h4 className="card-title">This is a placeholder to show volunteer ranking</h4>
              }

                <p className="card-text">Hi {this.state.profile.username}! Time to get blogging! Click view posts to see your contributions.</p>
              {
                this.state.isEditing
                ? <button type="submit" className="btn btn-primary edit-profile">Save Profile</button>
                : <button type="button" key="eric" className="btn btn-primary edit-profile" onClick={()=> this.setState({isEditing: true})}>Edit Profile</button>
              }

              {isOrganizer === 'false' && <div><Link className="btn btn-primary edit-profile" to='/eventlog'>See your Event Log</Link></div>}
              {isOrganizer === 'false' && <button className="btn btn-primary edit-profile">See Upcoming Events in Your Area</button>}
              {isOrganizer === 'false' && <button className="btn btn-primary edit-profile">See Your Gallery</button>}
              {isOrganizer === 'true' && <div><Link className="btn btn-primary edit-profile" to='/organizerEvents'>See Your Events</Link></div>}
              {isOrganizer === 'true' && <div><Link className="btn btn-primary edit-profile" to='/createEvent'>Create A New Event</Link></div>}
            </div>
          </div>
        </div>
    </form>
    )
  }
}
export default Profile;
