const VideoPlayer = (() => {
    const insertVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    };
    return {
        showVideo(url, id) {
            insertVideo(url, id);
        }
    };
})();


class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    set setInicio(_url) {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    playMultimedia() {
        VideoPlayer.showVideo(this.url, this.id);
    }

}

const musica = new Reproductor("https://www.youtube.com/embed/IXdNnw99-Ic?si=vnCGkrXtVqya-IQI", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/u_vrdHuPqxg?si=_8nziW99BA724Ah7", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/ChU_W9LfgZo?si=imJDDL2nw4He02J7", "series");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
