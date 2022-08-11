import axios from 'axios';

export default async function followLink(url) {
    const debug = false;
    if (debug) {console.log('Follow API link ' + url);}
    await axios
        .get(url).then(() => {if (debug) {console.log('API accessed');}});
}