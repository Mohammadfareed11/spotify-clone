/* ================================================
   SPOTIFY CLONE — app.js
   ================================================ */

/* ---- DATA ---- */
/* 
  HOW TO ADD YOUR OWN IMAGES:
  Replace the `img` field with a path like "images/album1.jpg"
  or a full URL like "https://example.com/image.jpg".
  If img is "", the emoji will show instead.
*/

const DATA = {

    quickPicks: [
        { id: 'qp1', name: 'Liked Songs', emoji: '❤️', color: 'linear-gradient(135deg,#450af5,#c4efd9)', img: '' },
        { id: 'qp2', name: 'Daily Mix 1', emoji: '🎵', color: 'linear-gradient(135deg,#4a90d9,#7b2ff7)', img: '' },
        { id: 'qp3', name: 'Rock Classics', emoji: '🎸', color: 'linear-gradient(135deg,#f7971e,#ffd200)', img: '' },
        { id: 'qp4', name: 'Chill Vibes', emoji: '😌', color: 'linear-gradient(135deg,#11998e,#38ef7d)', img: '' },
        { id: 'qp5', name: 'Top Hits 2025', emoji: '🔥', color: 'linear-gradient(135deg,#fc5c7d,#6a3093)', img: '' },
        { id: 'qp6', name: 'Workout Mix', emoji: '💪', color: 'linear-gradient(135deg,#f953c6,#b91d73)', img: '' },
    ],

    // featured: [
    //     { id: 'f1', name: 'Top 50 — India', sub: 'Updated daily', emoji: '🇮🇳', color: 'linear-gradient(135deg,#ff9933,#138808)', img: '', tracks: ['Tum Hi Ho', 'Kesariya', 'Raataan Lambiyan', 'Tera Ban Jaunga'] },
    //     { id: 'f2', name: 'Global Top 50', sub: 'Most played right now', emoji: '🌍', color: 'linear-gradient(135deg,#4a90d9,#0033cc)', img: '', tracks: ['Blinding Lights', 'Shape of You', 'Stay', 'As It Was'] },
    //     { id: 'f3', name: 'Viral Hits India', sub: 'Most-shared songs in India', emoji: '📈', color: 'linear-gradient(135deg,#11998e,#38ef7d)', img: '', tracks: ['Pasoori', 'Butta Bomma', 'Kala Chashma', 'Manike'] },
    //     { id: 'f4', name: 'New Music Friday', sub: 'Best new music this week', emoji: '✨', color: 'linear-gradient(135deg,#fc5c7d,#6a3093)', img: '', tracks: ['New Song 1', 'New Song 2', 'New Song 3', 'New Song 4'] },
    //     { id: 'f5', name: 'Bollywood Hits', sub: 'Latest blockbuster tracks', emoji: '🎬', color: 'linear-gradient(135deg,#f7971e,#ffd200)', img: '', tracks: ['Apna Bana Le', 'Zinda Banda', 'Jhoome Jo Pathaan', 'Besharam Rang'] },
    //     { id: 'f6', name: 'Trending Now', sub: 'Everyone is listening today', emoji: '💫', color: 'linear-gradient(135deg,#00c6ff,#0072ff)', img: '', tracks: ['Track A', 'Track B', 'Track C', 'Track D'] },
    // ],
    featured: [
       { id: 'f1', name: 'Top 50 — Global',    img: 'card1img.jpeg' },
       { id: 'f2', name: 'Mahiye Jinna Sohna', img: 'card2img - Copy.jpeg' },
       { id: 'f3', name: 'Mere Paas Tum Ho',   img: 'card3img.jpeg' },
       { id: 'f4', name: 'Album 4',            img: 'card4img.jpeg' },
       { id: 'f5', name: 'Top Songs India',    img: 'card6img.jpeg' },
    ],

    madeForYou: [
        { id: 'm1', name: 'Daily Mix 1', sub: 'Arijit Singh, AR Rahman & more', emoji: '🎵', color: 'linear-gradient(135deg,#f7971e,#fc5c7d)', img: '', tracks: ['Tum Hi Ho', 'Kal Ho Naa Ho', 'Tere Bina', 'Channa Mereya'] },
        { id: 'm2', name: 'Daily Mix 2', sub: 'The Weeknd, Drake & more', emoji: '🎧', color: 'linear-gradient(135deg,#38ef7d,#4a90d9)', img: '', tracks: ['Blinding Lights', 'Starboy', 'One Dance', 'God\'s Plan'] },
        { id: 'm3', name: 'Discover Weekly', sub: 'Fresh music for you', emoji: '💿', color: 'linear-gradient(135deg,#667eea,#764ba2)', img: '', tracks: ['Discovery 1', 'Discovery 2', 'Discovery 3', 'Discovery 4'] },
        { id: 'm4', name: 'Release Radar', sub: 'Latest from artists you follow', emoji: '📻', color: 'linear-gradient(135deg,#f093fb,#f5576c)', img: '', tracks: ['Release 1', 'Release 2', 'Release 3', 'Release 4'] },
        { id: 'm5', name: 'On Repeat', sub: 'Songs you can\'t stop playing', emoji: '🔁', color: 'linear-gradient(135deg,#4facfe,#00f2fe)', img: '', tracks: ['Repeat 1', 'Repeat 2', 'Repeat 3', 'Repeat 4'] },
        { id: 'm6', name: 'Time Capsule', sub: 'Songs from your past', emoji: '⏰', color: 'linear-gradient(135deg,#43e97b,#38f9d7)', img: '', tracks: ['Old Song 1', 'Old Song 2', 'Old Song 3', 'Old Song 4'] },
    ],

    artists: [
        { id: 'a1', name: 'Arijit Singh', sub: 'Artist', emoji: '🎤', color: 'linear-gradient(135deg,#667eea,#764ba2)', img: '', circle: true },
        { id: 'a2', name: 'AR Rahman', sub: 'Artist', emoji: '🎵', color: 'linear-gradient(135deg,#f093fb,#f5576c)', img: '', circle: true },
        { id: 'a3', name: 'The Weeknd', sub: 'Artist', emoji: '🌙', color: 'linear-gradient(135deg,#4facfe,#00f2fe)', img: '', circle: true },
        { id: 'a4', name: 'Drake', sub: 'Artist', emoji: '🎤', color: 'linear-gradient(135deg,#43e97b,#38f9d7)', img: '', circle: true },
        { id: 'a5', name: 'Dua Lipa', sub: 'Artist', emoji: '💃', color: 'linear-gradient(135deg,#fa709a,#fee140)', img: '', circle: true },
        { id: 'a6', name: 'Taylor Swift', sub: 'Artist', emoji: '🎸', color: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', img: '', circle: true },
        { id: 'a7', name: 'Ed Sheeran', sub: 'Artist', emoji: '🎸', color: 'linear-gradient(135deg,#ffecd2,#fcb69f)', img: '', circle: true },
        { id: 'a8', name: 'Shreya Ghoshal', sub: 'Artist', emoji: '🎼', color: 'linear-gradient(135deg,#a1c4fd,#c2e9fb)', img: '', circle: true },
    ],
    // artists: [
    //     { id: 'a1', name: 'Fareed', img: 'images/fareed1.jpg', circle: true },
    //     { id: 'a2', name: 'Fareed2', img: 'images/fareed2.jpg', circle: true },
    //     { id: 'a3', name: 'MD', img: 'images/md.jpg', circle: true },
    // ],

    albums: [
        { id: 'al1', name: 'After Hours', sub: 'The Weeknd • 2020', emoji: '🌃', color: 'linear-gradient(135deg,#300030,#ff2400)', img: '', tracks: ['Blinding Lights', 'Heartless', 'Alone Again', 'Faith'] },
        { id: 'al2', name: 'Aashiqui 2', sub: 'Ankit Tiwari • 2013', emoji: '❤️', color: 'linear-gradient(135deg,#f7971e,#ffd200)', img: '', tracks: ['Tum Hi Ho', 'Sun Raha Hai', 'Chahun Main', 'Milne Hai Mujhse'] },
        { id: 'al3', name: '÷ Divide', sub: 'Ed Sheeran • 2017', emoji: '➗', color: 'linear-gradient(135deg,#2c3e50,#4ca1af)', img: '', tracks: ['Shape of You', 'Castle on the Hill', 'Galway Girl', 'Perfect'] },
        { id: 'al4', name: 'Certified Lover', sub: 'Drake • 2021', emoji: '💙', color: 'linear-gradient(135deg,#0f2027,#203a43)', img: '', tracks: ['Champagne Poetry', 'Girls Want Girls', 'TSU', 'IMY2'] },
        { id: 'al5', name: 'Future Nostalgia', sub: 'Dua Lipa • 2020', emoji: '🪩', color: 'linear-gradient(135deg,#fc5c7d,#6a3093)', img: '', tracks: ['Levitating', 'Don\'t Start Now', 'Physical', 'Break My Heart'] },
        { id: 'al6', name: 'Brahmastra OST', sub: 'Pritam • 2022', emoji: '🔱', color: 'linear-gradient(135deg,#f7971e,#fc5c7d)', img: '', tracks: ['Kesariya', 'Dance Ka Bhoot', 'Deva Deva', 'Rasiya'] },
    ],

    recent: [
        { id: 'r1', name: 'Tum Hi Ho', sub: 'Arijit Singh', emoji: '🎵', color: 'linear-gradient(135deg,#f7971e,#ffd200)', img: '' },
        { id: 'r2', name: 'Blinding Lights', sub: 'The Weeknd', emoji: '🌙', color: 'linear-gradient(135deg,#300030,#ff2400)', img: '' },
        { id: 'r3', name: 'Shape of You', sub: 'Ed Sheeran', emoji: '🎸', color: 'linear-gradient(135deg,#2c3e50,#4ca1af)', img: '' },
        { id: 'r4', name: 'Kesariya', sub: 'Arijit Singh', emoji: '🔱', color: 'linear-gradient(135deg,#f7971e,#fc5c7d)', img: '' },
        { id: 'r5', name: 'Levitating', sub: 'Dua Lipa', emoji: '🪩', color: 'linear-gradient(135deg,#fc5c7d,#6a3093)', img: '' },
        { id: 'r6', name: 'Pasoori', sub: 'Ali Sethi', emoji: '🎼', color: 'linear-gradient(135deg,#11998e,#38ef7d)', img: '' },
    ],

    podcasts: [
        { id: 'pc1', name: 'The Joe Rogan Experience', sub: 'Comedy & talk', emoji: '🎙️', color: 'linear-gradient(135deg,#232526,#414345)', img: '' },
        { id: 'pc2', name: 'Crime Junkie', sub: 'True crime', emoji: '🔍', color: 'linear-gradient(135deg,#200122,#6f0000)', img: '' },
        { id: 'pc3', name: 'Huberman Lab', sub: 'Health & science', emoji: '🧠', color: 'linear-gradient(135deg,#005c97,#363795)', img: '' },
        { id: 'pc4', name: 'Bollywood Wrap', sub: 'Bollywood news', emoji: '🎬', color: 'linear-gradient(135deg,#f7971e,#ffd200)', img: '' },
    ],

    genres: [
        { name: 'Pop', emoji: '🎤', bg: '#c13584' },
        { name: 'Hip-Hop', emoji: '🎧', bg: '#4a90d9' },
        { name: 'Rock', emoji: '🎸', bg: '#e74c3c' },
        { name: 'Electronic', emoji: '🎛️', bg: '#9b59b6' },
        { name: 'Jazz', emoji: '🎷', bg: '#2c3e50' },
        { name: 'Classical', emoji: '🎻', bg: '#16a085' },
        { name: 'Bollywood', emoji: '🎬', bg: '#e67e22' },
        { name: 'Indie', emoji: '🌿', bg: '#27ae60' },
        { name: 'R&B', emoji: '💜', bg: '#8e44ad' },
        { name: 'Workout', emoji: '💪', bg: '#e74c3c' },
        { name: 'Podcasts', emoji: '🎙️', bg: '#2980b9' },
        { name: 'Party', emoji: '🥳', bg: '#f39c12' },
        { name: 'Sleep', emoji: '😴', bg: '#1a252f' },
        { name: 'Romance', emoji: '❤️', bg: '#c0392b' },
        { name: 'Devotional', emoji: '🙏', bg: '#d35400' },
        { name: 'Kids', emoji: '🧸', bg: '#27ae60' },
    ],

    library: [
        { name: 'Liked Songs', sub: 'Playlist • 47 songs', emoji: '❤️', color: 'linear-gradient(135deg,#450af5,#c4efd9)', img: '', tracks: ['Tum Hi Ho', 'Blinding Lights', 'Shape of You', 'Kesariya'] },
        { name: 'My Playlist #1', sub: 'Playlist • You', emoji: '🎵', color: 'linear-gradient(135deg,#4a90d9,#7b2ff7)', img: '', tracks: ['Track 1', 'Track 2', 'Track 3'] },
        { name: 'Rock Classics', sub: 'Playlist • Spotify', emoji: '🎸', color: 'linear-gradient(135deg,#f7971e,#ffd200)', img: '', tracks: ['Stairway to Heaven', 'Bohemian Rhapsody', 'Hotel California'] },
        { name: 'Chill Vibes', sub: 'Playlist • Spotify', emoji: '😌', color: 'linear-gradient(135deg,#11998e,#38ef7d)', img: '', tracks: ['Lo-fi 1', 'Lo-fi 2', 'Lo-fi 3'] },
        { name: 'Top Hits 2025', sub: 'Playlist • Spotify', emoji: '🔥', color: 'linear-gradient(135deg,#fc5c7d,#6a3093)', img: '', tracks: ['Hit 1', 'Hit 2', 'Hit 3'] },
        { name: 'Workout Mix', sub: 'Playlist • You', emoji: '💪', color: 'linear-gradient(135deg,#f953c6,#b91d73)', img: '', tracks: ['Pump Up 1', 'Pump Up 2', 'Pump Up 3'] },
    ],
};

/* ---- STATE ---- */
let state = {
    playing: false,
    progress: 0,
    volume: 65,
    muted: false,
    shuffleOn: false,
    repeatOn: false,
    liked: false,
    currentTrack: { name: 'Tum Hi Ho', artist: 'Arijit Singh', emoji: '🎵', img: '', color: 'linear-gradient(135deg,#f7971e,#ffd200)' },
    currentPage: 'home',
    timer: null,
    totalSec: 214,
};

/* ---- HELPERS ---- */
function toMMSS(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.round(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ---- IMAGE HELPER ---- */
function imgOrEmoji(src, emoji, color, classes = '') {
    if (src) {
        return `<img src="${src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.innerHTML='<span style=\\'font-size:inherit\\'>${emoji}</span>';this.parentElement.style.background='${color}'"/>`;
    }
    return `<span style="font-size:inherit">${emoji}</span>`;
}

/* ---- RENDER CARDS ---- */
function buildCard(item, circle = false) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
    <div class="card-img${circle ? ' circle' : ''}" style="background:${item.color}">
      ${imgOrEmoji(item.img, item.emoji, item.color)}
    </div>
    <p class="card-title">${item.name}</p>
    <p class="card-sub">${item.sub}</p>
    <button class="card-play-btn" onclick="event.stopPropagation();playItem(${JSON.stringify(item).replace(/"/g,"'")})">
      <i class="fa-solid fa-play"></i>
    </button>`;
    div.addEventListener('click', () => openModal(item));
    return div;
}

function renderRow(containerId, items, circle = false) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    items.forEach(item => el.appendChild(buildCard(item, circle)));
}

/* ---- QUICK GRID ---- */
function renderQuickGrid() {
    const el = document.getElementById('quickGrid');
    if (!el) return;
    el.innerHTML = '';
    DATA.quickPicks.forEach(item => {
        const div = document.createElement('div');
        div.className = 'quick-card';
        div.innerHTML = `
      <div class="quick-card-img" style="background:${item.color}">
        ${imgOrEmoji(item.img, item.emoji, item.color)}
      </div>
      <span class="quick-card-name">${item.name}</span>
      <button class="quick-play" onclick="event.stopPropagation();playItem(${JSON.stringify(item).replace(/"/g,"'")})">
        <i class="fa-solid fa-play"></i>
      </button>`;
        div.addEventListener('click', () => openModal(item));
        el.appendChild(div);
    });
}

/* ---- GENRE GRID ---- */
function renderGenreGrid() {
    const el = document.getElementById('genreGrid');
    if (!el) return;
    el.innerHTML = '';
    DATA.genres.forEach(g => {
        const div = document.createElement('div');
        div.className = 'genre-card';
        div.style.background = g.bg;
        div.innerHTML = `<h3>${g.name}</h3><span class="genre-emoji">${g.emoji}</span>`;
        div.addEventListener('click', () => { showToast('Opening ' + g.name); });
        el.appendChild(div);
    });
}

/* ---- LIBRARY (sidebar) ---- */
function renderSidebarLibrary() {
    const el = document.getElementById('libList');
    if (!el) return;
    const cont = el.querySelector('.lib-create-box');
    DATA.library.forEach(item => {
                const div = document.createElement('div');
                div.className = 'lib-item';
                div.innerHTML = `
      <div class="lib-item-img${item.circle ? ' circle' : ''}" style="background:${item.color}">
        ${item.img ? `<img src="${item.img}" alt="" onerror="this.style.display='none'"/>` : item.emoji}
      </div>
      <div class="lib-item-info">
        <p>${item.name}</p>
        <span>${item.sub}</span>
      </div>`;
    div.addEventListener('click', () => openModal(item));
    el.insertBefore(div, cont);
  });
}

/* ---- LIBRARY (mobile page) ---- */
function renderLibraryMobile() {
  const el = document.getElementById('libraryListMobile');
  if (!el) return;
  el.innerHTML = '';
  DATA.library.forEach(item => {
    const div = document.createElement('div');
    div.className = 'lib-item';
    div.style.cssText = 'padding:10px 8px;border-radius:8px;cursor:pointer;transition:.2s;';
    div.innerHTML = `
      <div class="lib-item-img" style="background:${item.color};width:52px;height:52px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;overflow:hidden">
        ${item.img ? `<img src="${item.img}" alt="" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'"/>` : item.emoji}
      </div>
      <div class="lib-item-info">
        <p style="font-size:15px;font-weight:600;margin-bottom:3px">${item.name}</p>
        <span style="font-size:12px;color:#b3b3b3">${item.sub}</span>
      </div>`;
    div.addEventListener('mouseenter', () => div.style.background = '#282828');
    div.addEventListener('mouseleave', () => div.style.background = '');
    div.addEventListener('click', () => openModal(item));
    el.appendChild(div);
  });
}

/* ---- MODAL ---- */
function openModal(item) {
  document.getElementById('modalTitle').textContent = item.name;
  const body = document.getElementById('modalBody');
  const tracks = item.tracks || ['Track 1', 'Track 2', 'Track 3'];
  body.innerHTML = tracks.map((t, i) => `
    <div class="track-item" onclick="playTrackFromList('${t}','${item.name}','${item.emoji}','${item.color}')">
      <span class="track-num">${i + 1}</span>
      <div class="track-thumb" style="background:${item.color}">
        ${item.img ? `<img src="${item.img}" alt=""/>` : item.emoji}
      </div>
      <div class="track-meta">
        <p>${t}</p>
        <span>${item.name}</span>
      </div>
      <span class="track-dur">${toMMSS(Math.floor(Math.random()*120+120))}</span>
    </div>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('playlistModal').classList.add('open');
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('playlistModal').classList.remove('open');
}
function playTrackFromList(name, artist, emoji, color) {
  closeModal();
  playItem({ name, sub: artist, emoji, color, img: '' });
}

/* ---- PLAYBACK ---- */
function playItem(item) {
  state.currentTrack = { name: item.name, artist: item.sub || '', emoji: item.emoji, img: item.img || '', color: item.color };
  state.progress = 0;
  updatePlayerUI();
  if (!state.playing) togglePlay();
  else restartTimer();
  showToast('▶  ' + item.name);
}

function togglePlay() {
  state.playing = !state.playing;
  const icon = state.playing ? 'fa-pause' : 'fa-play';
  document.getElementById('playBtn').innerHTML = `<i class="fa-solid ${icon}"></i>`;
  document.getElementById('npPlayBtn').innerHTML = `<i class="fa-solid ${icon}"></i>`;
  document.getElementById('miniPlayIcon').className = `fa-solid ${icon}`;
  if (state.playing) { restartTimer(); }
  else { clearInterval(state.timer); }
}
function restartTimer() {
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.progress += 1 / state.totalSec * 100;
    if (state.progress >= 100) {
      state.progress = 100;
      clearInterval(state.timer);
      state.playing = false;
      document.getElementById('playBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
      document.getElementById('npPlayBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
      document.getElementById('miniPlayIcon').className = 'fa-solid fa-play';
      if (state.repeatOn) { state.progress = 0; togglePlay(); }
    }
    updateProgressUI();
  }, 1000);
}

function prevTrack() {
  state.progress = 0;
  updateProgressUI();
  showToast('⏮  Previous track');
}
function nextTrack() {
  state.progress = 0;
  updateProgressUI();
  showToast('⏭  Next track');
  if (!state.playing) togglePlay();
}

function toggleMute() {
  state.muted = !state.muted;
  document.getElementById('muteBtn').innerHTML = state.muted
    ? '<i class="fa-solid fa-volume-xmark"></i>'
    : '<i class="fa-solid fa-volume-high"></i>';
  document.getElementById('volFill').style.width = state.muted ? '0%' : state.volume + '%';
}

/* ---- UPDATE UI ---- */
function updatePlayerUI() {
  const t = state.currentTrack;
  // player bar
  const img = document.getElementById('playerThumbImg');
  const em = document.getElementById('playerEmoji');
  if (t.img) { img.src = t.img; img.style.display = 'block'; em.style.display = 'none'; }
  else { img.style.display = 'none'; em.style.display = 'flex'; em.textContent = t.emoji; }
  document.getElementById('playerThumb').style.background = t.img ? '' : t.color;
  document.getElementById('playerTitle').textContent = t.name;
  document.getElementById('playerArtist').textContent = t.artist;
  // mini
  document.getElementById('miniThumb').textContent = t.emoji;
  document.getElementById('miniTitle').textContent = t.name;
  document.getElementById('miniArtist').textContent = t.artist;
  // now playing page
  const npImg = document.getElementById('npImg');
  npImg.style.background = t.color;
  npImg.textContent = t.emoji;
  document.getElementById('npTitle').textContent = t.name;
  document.getElementById('npArtist').textContent = t.artist;
  // total time
  document.getElementById('totalTime').textContent = toMMSS(state.totalSec);
  document.getElementById('npTotalTime').textContent = toMMSS(state.totalSec);
}

function updateProgressUI() {
  const pct = state.progress;
  const sec = Math.round(pct / 100 * state.totalSec);
  document.getElementById('mainProgressFill').style.width = pct + '%';
  document.getElementById('npProgressFill').style.width = pct + '%';
  document.getElementById('currentTime').textContent = toMMSS(sec);
  document.getElementById('npCurrentTime').textContent = toMMSS(sec);
}

/* ---- SEEK ---- */
function seekBar(e, barId, fillId) {
  const bar = document.getElementById(barId);
  const rect = bar.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const pct = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
  state.progress = pct;
  document.getElementById(fillId).style.width = pct + '%';
  document.getElementById('currentTime').textContent = toMMSS(Math.round(pct / 100 * state.totalSec));
  document.getElementById('npCurrentTime').textContent = toMMSS(Math.round(pct / 100 * state.totalSec));
}
function seekVol(e) {
  const bar = document.getElementById('volBar');
  const rect = bar.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const pct = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
  state.volume = pct;
  state.muted = false;
  document.getElementById('volFill').style.width = pct + '%';
  document.getElementById('muteBtn').innerHTML = pct > 0 ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
}

/* ---- PAGE NAVIGATION ---- */
function goPage(name) {
  state.currentPage = name;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');
  document.querySelectorAll('.mbn-item').forEach(b => {
    b.classList.toggle('active', b.dataset.page === name);
  });
  document.querySelectorAll('.sb-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === name);
  });
  // show/hide search in home topbar
  if (name === 'home') {
    const tbs = document.getElementById('topbarSearch');
    if (tbs) tbs.style.display = 'none';
  }
}

/* ---- SEARCH ---- */
function handleSearch(val) {
  const rs = document.getElementById('searchResults');
  const bs = document.getElementById('browseSection');
  const row = document.getElementById('searchResultsRow');
  if (!val.trim()) { rs.style.display = 'none'; bs.style.display = 'block'; return; }
  rs.style.display = 'block'; bs.style.display = 'none';
  const all = [...DATA.featured, ...DATA.madeForYou, ...DATA.albums, ...DATA.artists, ...DATA.recent];
  const results = all.filter(i => i.name.toLowerCase().includes(val.toLowerCase()) || (i.sub || '').toLowerCase().includes(val.toLowerCase()));
  row.innerHTML = '';
  if (results.length === 0) {
    row.innerHTML = '<p style="color:#b3b3b3;padding:16px 0">No results found for "' + val + '"</p>';
    return;
  }
  results.forEach(item => row.appendChild(buildCard(item, item.circle)));
}

/* ---- LIKE ---- */
function toggleLike() {
  state.liked = !state.liked;
  const btn = document.getElementById('heartBtn');
  const npBtn = document.getElementById('npLike');
  if (state.liked) {
    btn.innerHTML = '<i class="fa-solid fa-heart" style="color:#1DB954"></i>';
    btn.classList.add('liked');
    npBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    npBtn.classList.add('liked');
    showToast('Added to Liked Songs ✓');
  } else {
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    btn.classList.remove('liked');
    npBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    npBtn.classList.remove('liked');
  }
}

/* ---- GREETING ---- */
function setGreeting() {
  const h = new Date().getHours();
  const el = document.getElementById('greetingText');
  if (el) {
    if (h < 12) el.textContent = 'Good morning';
    else if (h < 18) el.textContent = 'Good afternoon';
    else el.textContent = 'Good evening';
  }
}

/* ---- TOPBAR gradient on scroll ---- */
function setupScrollGradient() {
  const scrollEl = document.querySelector('#page-home .page-scroll');
  const topbar = document.querySelector('#page-home .topbar');
  if (!scrollEl || !topbar) return;
  scrollEl.addEventListener('scroll', () => {
    const s = scrollEl.scrollTop;
    const opacity = Math.min(s / 80, 1);
    topbar.style.background = `rgba(18,18,18,${0.3 + opacity * 0.7})`;
  });
}

/* ---- EVENT BINDINGS ---- */
function bindEvents() {
  // Progress bars
  ['mainProgressBar', 'npProgressBar'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', e => seekBar(e, 'mainProgressBar', 'mainProgressFill'));
    el.addEventListener('touchstart', e => seekBar(e, 'mainProgressBar', 'mainProgressFill'), { passive: true });
  });
  const vb = document.getElementById('volBar');
  if (vb) {
    vb.addEventListener('click', seekVol);
    vb.addEventListener('touchstart', seekVol, { passive: true });
  }

  // Shuffle / Repeat
  const sb = document.getElementById('shuffleBtn');
  if (sb) sb.addEventListener('click', () => { state.shuffleOn = !state.shuffleOn; sb.classList.toggle('active', state.shuffleOn); showToast(state.shuffleOn ? 'Shuffle on' : 'Shuffle off'); });
  const rb = document.getElementById('repeatBtn');
  if (rb) rb.addEventListener('click', () => { state.repeatOn = !state.repeatOn; rb.classList.toggle('active', state.repeatOn); showToast(state.repeatOn ? 'Repeat on' : 'Repeat off'); });
  const npSh = document.getElementById('npShuffle');
  if (npSh) npSh.addEventListener('click', () => { state.shuffleOn = !state.shuffleOn; npSh.classList.toggle('active', state.shuffleOn); });
  const npRe = document.getElementById('npRepeat');
  if (npRe) npRe.addEventListener('click', () => { state.repeatOn = !state.repeatOn; npRe.classList.toggle('active', state.repeatOn); });

  // Like
  const hb = document.getElementById('heartBtn');
  if (hb) hb.addEventListener('click', toggleLike);
  const nl = document.getElementById('npLike');
  if (nl) nl.addEventListener('click', toggleLike);

  // Mobile nav
  document.querySelectorAll('.mbn-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.page;
      if (p === 'premium') { showToast('Explore Premium plans!'); return; }
      goPage(p);
    });
  });

  // Sidebar nav
  document.querySelectorAll('.sb-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      goPage(link.dataset.page || 'home');
    });
  });

  // Lib pills
  document.querySelectorAll('.lib-pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pill.closest('.lib-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
}

/* ---- INIT ---- */
function init() {
  setGreeting();
  renderQuickGrid();
  renderRow('featuredRow',    DATA.featured);
  renderRow('madeForYouRow',  DATA.madeForYou);
  renderRow('artistsRow',     DATA.artists, true);
  renderRow('albumsRow',      DATA.albums);
  renderRow('recentRow',      DATA.recent);
  renderRow('podcastRow',     DATA.podcasts);
  renderGenreGrid();
  renderSidebarLibrary();
  renderLibraryMobile();
  updatePlayerUI();
  updateProgressUI();
  document.getElementById('volFill').style.width = state.volume + '%';
  bindEvents();
  setupScrollGradient();
  goPage('home');
}

document.addEventListener('DOMContentLoaded', init);
