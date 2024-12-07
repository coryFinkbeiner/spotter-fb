# Functional Spotify API Project

This project is a music app concept featuring functionalities like user-curated sidebars, search with year filtering, and custom playlists with sub-queues and true shuffle.

**Features:**

  * **Search:**
      * Find specific songs or albums with ease.
      * Filter results by albums, artists, songs and year range.
      ![Search](images/Search.jpg)
  * **Custom Playlist Generator:**
      * Generate unique recommendations utilizing Spotify's seed and settings method.
      * Create personalized playlists and save them to Spotify.
      ![GetRecs](images/GetRecs.jpg)
  * **Firebase Functions:**
      * Leverage Firebase functions to handle Spotify token reauthorization seamlessly, ensuring uninterrupted use.

**Running the App:**

1. **Client:**
   * Navigate to the `client` directory.
   * Run `npm run dev` to start the development server.
2. **Firebase Functions:**
   * Navigate to the `functions` directory.
   * Run `firebase emulators:start --only functions` to start the Firebase emulators.
