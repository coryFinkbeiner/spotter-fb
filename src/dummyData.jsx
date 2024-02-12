
export const libraryAlbums = {
  href: "https://api.spotify.com/v1/me/albums?offset=0&limit=50&locale=en-US,en;q=0.9",
  items: [

    // 0
    {
      album: {
        album_type: "album",
        artists: [
          {
            href: "https://api.spotify.com/v1/artists/247AfC9pLuqwgpH8Mo96oA",
            id: "247AfC9pLuqwgpH8Mo96oA",
            name: "Connan Mockasin",
            type: "artist",
            uri: "spotify:artist:247AfC9pLuqwgpH8Mo96oA",
          }
        ],
        id: "5J3hSygoerXrNBpEFWcGIJ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273f9d54be02aacf5696c19e30f",
            width: 640
          },
        ],
        name: "Jassbusters",
        popularity: 0,
        release_date: "2018-10-12",
        total_tracks: 8,
        tracks: {
          href: "https://api.spotify.com/v1/albums/5J3hSygoerXrNBpEFWcGIJ/tracks?offset=0&limit=50&locale=en-US,en;q=0.9",
          items: [
            // 0 track
            {
              artists: [
                {
                  href: "https://api.spotify.com/v1/artists/247AfC9pLuqwgpH8Mo96oA",
                  id: "247AfC9pLuqwgpH8Mo96oA",
                  name: "Connan Mockasin",
                  type: "artist",
                  uri: "spotify:artist:247AfC9pLuqwgpH8Mo96oA",
                  available_markets: []
                }
              ],
              duration_ms: 536254,
              href: "https://api.spotify.com/v1/tracks/4sNygl4IX9iMZ7nV3XTUJe",
              id: "4sNygl4IX9iMZ7nV3XTUJe",
              name: "Charlotte's Thong",
              preview_url: null,
              track_number: 1,
              type: "track",
              uri: "spotify:track:4sNygl4IX9iMZ7nV3XTUJe"
            },
          ],
          limit: 50,
          next: null,
          offset: 0,
          previous: null,
          total: 8,
          type: "album",
          uri: "spotify:album:5J3hSygoerXrNBpEFWcGIJ"
        }
      }
    }
  ],
  limit: 50,
  next: "https://api.spotify.com/v1/me/albums?offset=50&limit=50&locale=en-US,en;q=0.9",
  offset: 0,
  previous: null,
  total: 834
}


export const libraryPlaylists = {
  href: "https://api.spotify.com/v1/users/j9qnui1zy8xf6nnuemleq5qfu/playlists?offset=0&limit=50",
  items: [
    {
      description: "but mostly Sophie",
      href: "https://api.spotify.com/v1/playlists/3v5uu46pvXtRwceiF4Gb4l",
      id: "3v5uu46pvXtRwceiF4Gb4l",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27329ef3bf15b21c47294417966ab67616d0000b27390b4e1905b1fc48c537ec053ab67616d0000b2739b035b031d9f0a6a75ae464eab67616d0000b273adf8657e1af5397243934673",
          width: 640
        },
      ],
      name: "Sophie and Cory Clean",
      owner: {
        display_name: "Bodhi",
        external_urls: {
          spotify: "https://open.spotify.com/user/j9qnui1zy8xf6nnuemleq5qfu"
        },
        href: "https://api.spotify.com/v1/users/j9qnui1zy8xf6nnuemleq5qfu",
        id: "j9qnui1zy8xf6nnuemleq5qfu",
        type: "user",
        uri: "spotify:user:j9qnui1zy8xf6nnuemleq5qfu"
      },
      // ********* getPlaylistTracks
      tracks: {
        href: "https://api.spotify.com/v1/playlists/3v5uu46pvXtRwceiF4Gb4l/tracks",
        total: 26,
      }
      type: "playlist",
      uri: "spotify:playlist:3v5uu46pvXtRwceiF4Gb4l"
    },
    // ... (other playlist items)
  ],
  limit: 50,
  next: "https://api.spotify.com/v1/users/j9qnui1zy8xf6nnuemleq5qfu/playlists?offset=50&limit=50",
  offset: 0,
  previous: null,
  total: 481
};

