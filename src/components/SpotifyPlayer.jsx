import React, { Component } from 'react';
import { initSpotifyPlayer } from '../lib/utils';

class SpotifyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      artist: '',
      track: ''
    };
  }

  componentDidMount() {
    initSpotifyPlayer({
      onPlayerStateChanged: this.onPlayerStateChanged.bind(this)
    });
  }

  onPlayerStateChanged(spotifyPlayerState) {
    console.log(spotifyPlayerState);
    this.setState({
      playing: !spotifyPlayerState.paused,
      artist: spotifyPlayerState.track_window.current_track.artists.map((x) => x.name).join(','),
      track: spotifyPlayerState.track_window.current_track.name
    });
  }

  render() {
    if (this.state.playing) {
      return (
        <h1>
          Playing {this.state.track} by {this.state.artist}
        </h1>
      );
    } else {
      return <h1>Paused</h1>;
    }
  }
}

export default SpotifyPlayer;
