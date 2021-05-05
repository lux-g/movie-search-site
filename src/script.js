import './styles/style.scss'
import axios from 'axios'
import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.css'
import $ from "jquery"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'




SwiperCore.use([Navigation, Pagination])




//SWIPER
const swiper1 = new Swiper('.swiper1', {
    observer: true,
    observeParents: true,
    slidesPerView: 7,
    spaceBetween: 15,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >=
        320: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        835: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        975: {
            slidesPerView: 6,
            spaceBetween: 15
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    }
});

const swiper2 = new Swiper('.swiper2', {
    observer: true,
    observeParents: true,
    slidesPerView: 7,
    spaceBetween: 15,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >=
        320: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        835: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        975: {
            slidesPerView: 6,
            spaceBetween: 15
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    }
});

const swiper3 = new Swiper('.swiper3', {
    observer: true,
    observeParents: true,
    slidesPerView: 7,
    spaceBetween: 15,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >=
        320: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        835: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        975: {
            slidesPerView: 6,
            spaceBetween: 15
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    }
});

const swiper4 = new Swiper('.swiper4', {
    observer: true,
    observeParents: true,
    slidesPerView: 7,
    spaceBetween: 15,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >=
        320: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 2
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        835: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        975: {
            slidesPerView: 6,
            spaceBetween: 15
        },
        1100: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    }
});



//SEARCH FORM VARIABLES
const input = document.querySelector('.input-value');
const form = document.querySelector('.nav-container_form');
let searchValue;

//FORM SUBMIT EVENTLISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchMovie(searchValue)
});

//FORM INPUT EVENTLISTENER
input.addEventListener('input', updateInput);

//SET SEARCH VALUE
function updateInput(e) {
    searchValue = e.target.value;
};
//--------END FORM SUBMIT--------//




//SEARCH MOVIES
const searchMovie = async (query) => {
    const openSearch = document.querySelector('.swiper4');
    openSearch.classList.add('open-search-swiper')

    clear();

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=969eff075f7d2012082300be0a0c9d7a&query=${query}`)

        const data = res.data.results;

        data.forEach(item => {
            if (item.poster_path === null) {
                return
            } else {
                const swiperWrapper4 = document.querySelector('.swiper-wrapper4');
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('swiper-slide')
                imgContainer.innerHTML = `
                    <img class="movie-image" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movies" data-movie-id=${item.id}>
                `;
                swiperWrapper4.classList.add('display-search-swiper')
                swiperWrapper4.appendChild(imgContainer)
            }
        })
    } catch (error) {
        console.log(error)
    }
};

//GET IN THEATRES MOVIES
const getInTheatres = async () => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=969eff075f7d2012082300be0a0c9d7a');

        const data = res.data.results;

        data.forEach(item => {
            const swiperWrapper1 = document.querySelector('.swiper-wrapper1');
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('swiper-slide')
            imgContainer.innerHTML = `
                <img class="movie-image" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movies" data-movie-id=${item.id}>
            `;
            swiperWrapper1.appendChild(imgContainer)
        })
    } catch (error) {
        console.log(error)
    }
};

//GET TOP RATE MOVIES
const getTopRated = async () => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=969eff075f7d2012082300be0a0c9d7a');

        const data = res.data.results;

        data.forEach(item => {
            const swiperWrapper2 = document.querySelector('.swiper-wrapper2');
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('swiper-slide')
            imgContainer.innerHTML = `
            <img class="movie-image" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movies" data-movie-id=${item.id}>
            `;
            swiperWrapper2.appendChild(imgContainer)
        })
    } catch (error) {
        console.log(error)
    }
};

//GET POPULAR MOVIES
const getPop = async () => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=969eff075f7d2012082300be0a0c9d7a');

        const data = res.data.results;

        data.forEach(item => {
            const swiperWrapper3 = document.querySelector('.swiper-wrapper3');
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('swiper-slide')
            imgContainer.innerHTML = `
            <img class="movie-image" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movies" data-movie-id=${item.id}>
            `;
            swiperWrapper3.appendChild(imgContainer)
        })
    } catch (error) {
        console.log(error)
    }
};




//CLEARS SEARCH IMAGE SLIDER AND INPUT FIELD
//RUNS IN searchMovie()
function clear() {
    const swiperWrapper4 = document.querySelector('.swiper-wrapper4');
    swiperWrapper4.innerHTML = '';
    input.value = '';
};



//GET DATA ID FROM EACH IMAGE
window.addEventListener('click', (e) => {
    //console.log(e.target)
    if (e.target.classList.contains('movie-image')) {
        const id = e.target.dataset.movieId;
        //console.log(id)

        //OPEN MODAL
        const modal = document.querySelector('.modal');
        modal.classList.add('open-modal');
        document.body.classList.add('disable-body-scroll')

        //CALL getDetails FUNCTION
        getDetails(id);

        //CLEAR MODAL CONTENT
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '';

    } else {
        return
    }
});



//DISPLAYS MOVIE DETAILS WHEN MODAL OPENS
const getDetails = async (getId) => {
    //URLS
    const urlgetId = `https://api.themoviedb.org/3/movie/${getId}?api_key=969eff075f7d2012082300be0a0c9d7a`;
    const urlgetVideo = `https://api.themoviedb.org/3/movie/${getId}/videos?api_key=969eff075f7d2012082300be0a0c9d7a`;


    //GET ID
    const res = await axios.get(urlgetId)
    const data = res.data;
    //console.log(data)

    //GET VIDEO
    const resTwo = await axios.get(urlgetVideo)
    const dataTwo = resTwo.data.results[0];
    console.log(dataTwo)

    //IF DOES NOT HAVE VIDEO TRAILER
    if(resTwo.data.results.length === 0) {
        const modalContent = document.querySelector('.modal-content');
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('about-movie');
    
        //CHECKS LENGTH OF GENRE ARRAY - CALLED IN contentContainer.innerHTML
        function checkGenre() {
            if (data.genres.length == 1) {
                return data.genres[0].name
            } else if (data.genres.length > 1) {
                return data.genres[0].name + "/" + data.genres[1].name
            }
        };
        //TO UPPERCASE FUNCTION - CALLED IN contentContainer.innerHTML
        function makeUppercase(text) {
            return text.toUpperCase();
        };
    
        contentContainer.innerHTML = `
            <div class="movie-title-info">
                <div class="title">
                    <h1>${data.original_title} <span>(${data.release_date.slice(0, 4)})</span></h1>
                    <li><i class="fas fa-star"></i> ${data.vote_average}</li>
                </div>
            <div class="other-info">
                <li>${data.runtime} min</li>
                <li>|</li>
                <li>${checkGenre()}</li>
                <li>|</li>
                <li>${data.release_date}</li>
                <li>|</li>
                <li>(${makeUppercase(data.original_language)})</li>
                
            </div>
            </div>
            <div class="movie-img-trailer">
                <div class="movie-trailer">
                    <iframe class="trailer" src="https://www.youtube.com/embed/" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
    
            <div class="movie-summary">
    
                <div class="summary">
                    <p class="tagline">${data.tagline}</p>
                    <p>${data.overview}</p>
                </div>
            </div>
            `;
        modalContent.appendChild(contentContainer);
    } else {
        const modalContent = document.querySelector('.modal-content');
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('about-movie');
    
        //CHECKS LENGTH OF GENRE ARRAY - CALLED IN contentContainer.innerHTML
        function checkGenre() {
            if (data.genres.length == 1) {
                return data.genres[0].name
            } else if (data.genres.length > 1) {
                return data.genres[0].name + "/" + data.genres[1].name
            }
        };
        //TO UPPERCASE FUNCTION - CALLED IN contentContainer.innerHTML
        function makeUppercase(text) {
            return text.toUpperCase();
        };
    
        contentContainer.innerHTML = `
            <div class="movie-title-info">
                <div class="title">
                    <h1>${data.original_title} <span>(${data.release_date.slice(0, 4)})</span></h1>
                    <li><i class="fas fa-star"></i> ${data.vote_average}</li>
                </div>
            <div class="other-info">
                <li>${data.runtime} min</li>
                <li>|</li>
                <li>${checkGenre()}</li>
                <li>|</li>
                <li>${data.release_date}</li>
                <li>|</li>
                <li>(${makeUppercase(data.original_language)})</li>
                
            </div>
            </div>
            <div class="movie-img-trailer">
                <div class="movie-trailer">
                    <iframe class="trailer" src="https://www.youtube.com/embed/${dataTwo.key}" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
    
            <div class="movie-summary">
    
                <div class="summary">
                    <p class="tagline">${data.tagline}</p>
                    <p>${data.overview}</p>
                </div>
            </div>
            `;
        modalContent.appendChild(contentContainer);
    }

};




//CLOSE MODAL
const closeModal = document.querySelector('.fi-xnluxl-times');
const modal = document.querySelector('.modal');
const trailer = document.querySelector('.trailer')

closeModal.addEventListener('click', () => {
    modal.classList.remove('open-modal')
    document.body.classList.remove('disable-body-scroll');
});

//JQUERY CODE TO STOP VIDEO WHEN MODAL CLOSES
$(modal).click(function() {
    $('.trailer').attr('src', $('iframe').attr('src'));
})





//pageload
getInTheatres();
getTopRated();
getPop();


