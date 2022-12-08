import { ReactVideoPlay } from "react-video-play";

function Details() {
    return (  <ReactVideoPlay
        sources={"https://www.youtube.com/embed/htnkOpknGok"}
        poster="http://lorempixel.com/900/450/people/"
        enableSlider={true}
        autoplay={true}
        muted={true}
    /> );
}

export default Details;