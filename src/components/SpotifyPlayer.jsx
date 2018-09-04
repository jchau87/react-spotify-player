import React, { Component } from 'react';
import { initSpotifyPlayer } from '../lib/utils';

class SpotifyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidMount() {
    initSpotifyPlayer({
      onPlayerStateChanged: this.onPlayerStateChanged.bind(this)
    });
  }

  onPlayerStateChanged(spotifyPlayerState) {
    console.log(spotifyPlayerState);
    this.setState({ playing: !spotifyPlayerState.paused });
  }

  render() {
    return <h1>{this.state.playing ? <div>Player is playing</div> : <div>Player is paused</div>}</h1>;
  }
}

export default SpotifyPlayer;
