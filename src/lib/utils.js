export function initSpotifyPlayer({ onPlayerStateChanged }) {
  // Taken from https://developer.spotify.com/documentation/web-playback-sdk/quick-start
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token =
      '';
    const player = new window.Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: (cb) => {
        cb(token);
      }
    });

    // Error handling
    // player.addListener('initialization_error', ({ message }) => { console.error(message); });
    // player.addListener('authentication_error', ({ message }) => { console.error(message); });
    // player.addListener('account_error', ({ message }) => { console.error(message); });
    // player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', onPlayerStateChanged);

    // Ready
    // player.addListener('ready', ({ device_id }) => {
    //   console.log('Ready with Device ID', device_id);
    // });

    // Not Ready
    // player.addListener('not_ready', ({ device_id }) => {
    //   console.log('Device ID has gone offline', device_id);
    // });

    // Connect to the player!
    player.connect();
  };
}
