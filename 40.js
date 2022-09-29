const albums = [];

function make_album(artist, album_title, no_of_tracks) {
  albums.unshift({
    artist,
    album_title,
    no_of_tracks: no_of_tracks && 0,
  });
  return console.log(albums[0]);
}

make_album("Pink Floyd", "The Dark Side of the Moon", 200);
make_album("Adele", "21");
make_album("Whitney Houston", "The Bodyguard");