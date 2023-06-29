const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    audio = document.querySelector('.audio'),
    ProgressContainer = document.querySelector('.progress__container'),
    progres = document.querySelector('.progress'),
    imgSrc = document.querySelector('.img_src'),
    time = document.querySelector('.controls__time'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    timeTrack = document.querySelector('.controls__duration');






/* Name song */
const songs = ['Раньше', 'Серёга - Возле дома твоего', 'GUMA - Стеклянная', 'H8.HOOD - Аригато', 'Heartburn', 'XXXTENTACION - Jocelyn Flores'];

/* song in defold */
let songIndex = 0;

//int
function loadSong(song) {
    audio.src = `audio/${song}.mp3`
}

loadSong(songs[songIndex])
//Play

function playSong() {
    player.classList.add('play');
    imgSrc.src = './img/icon/pausebtn.png'
    audio.play()



};


//pause
function pauseSong() {
    player.classList.remove('play');
    imgSrc.src = './img/icon/playbtn.png'
    audio.pause()

};
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
});

//Next Song

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
    const SongNames = document.querySelectorAll('.music__song-name');

    SongNames.forEach(SongName => {
        if (songs[songIndex] === SongName.innerHTML) {
            SongName.classList.add('active');
        } else {
            SongName.classList.remove('active');
        }
    });
}
nextBtn.addEventListener('click', nextSong)

//Prev Song

function prevSong() {
    songIndex--


    loadSong(songs[songIndex])
    playSong()
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    const SongNames = document.querySelectorAll('.music__song-name');

    SongNames.forEach(SongName => {
        if (songs[songIndex] === SongName.innerHTML) {
            SongName.classList.add('active');
        } else {
            SongName.classList.remove('active');
        }
    });
}
prevBtn.addEventListener('click', prevSong)

/* Progress bar */
function updateProgress(e) {
    const {
        duration,
        currentTime
    } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progres.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

//Set profress
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    /*     const currentTime = ; */

    audio.currentTime = (clickX / width) * duration

}
ProgressContainer.addEventListener('click', setProgress)

// Autoplay
audio.addEventListener('ended', nextSong)


// timer

function timer() {
    progres.value = (audio.currentTime / audio.duration) * 100
    //Minutes
    let minutes = Math.floor(audio.currentTime / 60)
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }

    //seconds
    let seconds = Math.floor(audio.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }

    time.innerHTML = `${minutes}:${seconds}`;
}
audio.addEventListener('timeupdate', timer)


// Смена актива между кнопками  


function TrackTime() {
    progres.value = (audio.currentTime / audio.duration) * 100
    //Minutes
    let minutes = Math.floor(audio.currentTime / 60)
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }

    //seconds
    let seconds = Math.floor(audio.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }

    timeTrack.innerHTML = `${minutes}:${seconds}`;
}
audio.addEventListener('timeupdate', TrackTime);

//============SLIDER================

const swiper = new Swiper('.section__slider-main', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.section__galery-bootom-box-next',
        prevEl: '.section__galery-bootom-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


/* menu burger */

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.nav,.header__burger-span').toggleClass('active')
    })
})