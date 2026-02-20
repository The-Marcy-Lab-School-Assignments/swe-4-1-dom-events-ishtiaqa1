const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...

const grid = document.getElementById('playlists-grid');
const nowplaying = document.getElementById('now-playing-title');

for (let i = 0; i < playlists.length; i++) {
  const playlist = playlists[i]
  const li = document.createElement('li');
  li.dataset.title = playlist.title;
  const img = document.createElement('img');
  img.src = playlist.image;
  img.alt = playlist.description;
  const p = document.createElement('p');
  p.textContent = playlist.title;
  li.appendChild(img);
  li.appendChild(p);
  li.classList.add('playlist-card')
  grid.appendChild(li);

  li.addEventListener('click', () => {
    document.querySelectorAll('.playlist-card.selected').forEach(card => {
      card.classList.remove('selected');
    })
    li.classList.add('selected');
    nowplaying.innerHTML = '';
    nowplaying.textContent = playlist.title
  })
}
