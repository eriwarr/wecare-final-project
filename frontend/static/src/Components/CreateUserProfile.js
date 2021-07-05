import { Component } from 'react';
import Cookies from 'js-cookie';

class CreateUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profilePicture: null,
      preview: '',
    }
    this.input = this.input.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.submit = this.submit.bind(this);
  }

  input(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  uploadImage(event) {
    let file = event.target.files[0];
    this.setState({ profilePicture: file, });

    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ preview: reader.result, });
    }
    reader.readAsDataURL(file);
    console.log('testing')
  }

  async submit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('profilePicture', this.state.profilePicture);
    formData.append('username', this.state.username);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    }
    await fetch('api/v1/users/profiles/', options);
    }

  render() {
    console.log(this.state.profilePicture)
    return (
      <>
      <form onSubmit={this.submit}>
        <div className="container">
          <h2>User Profile</h2>
            <div className="card">
              <input type="file" name="profilePicture" onChange={this.uploadImage}/>
              <input className="card-img-top" type="text" name="username" value={this.state.username} onChange={this.input} placeholder="Create an username"/>
              <div className="card-body">
              <button type="submit" className="btn btn-primary edit-profile">Save your profile!</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  }
}
export default CreateUserProfile
