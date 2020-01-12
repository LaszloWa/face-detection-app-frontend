import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signIn',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialState, 
      isDarkMode: 'lightMode'};
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input})
      fetch('https://sleepy-wildwood-42035.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://sleepy-wildwood-42035.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
              this.setState(Object.assign(this.state.user, {
              entries: count
              })) 
            }
          )
          .catch(err => console.log('Something went wrong.'))
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log('Something went wrong.'))       
  }

  onRouteChange = (route) => {
    if (route === 'signIn') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  onToggleDarkMode = () => {
    if (this.state.isDarkMode === 'lightMode') {
      this.setState({isDarkMode: 'darkMode'});
    } else {
      this.setState({isDarkMode: 'lightMode'});
    }
  }

  render() {
    const { isSignedIn, imageUrl, route, box, isDarkMode } = this.state;
    return (
      <div className="App">
        <Particles className={`particles ${this.state.isDarkMode}`}
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} onToggleDarkMode={this.onToggleDarkMode} isDarkMode={isDarkMode} />
        { route === 'home' 
        ? <div>
            <Logo isDarkMode={isDarkMode} />
            <Rank 
            name={this.state.user.name} 
            entries={this.state.user.entries}
            />
            <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        : ( this.state.route === 'signIn'
          ? <SignIn onRouteChange={this.onRouteChange}
          isDarkMode={isDarkMode}
          loadUser={this.loadUser} />
          : <Register onRouteChange={this.onRouteChange}
          isDarkMode={isDarkMode} 
          loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }
  
}

export default App;
