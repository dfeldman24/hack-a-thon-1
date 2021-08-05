chrome.runtime.onMessage.addListener(replace);
function replace() {
    let filenames = ['reggie.jpeg', 'mike.jpeg'],;
    let imgs = document.getElementsByTagName('img')
    for (images of imgs) {
        let r = Math.floor(Math.random() * filenames.length);
        let file = 'images/' + filenames[r];
        let url = chrome.extension.getURL(file);
        images.src = url;
        console.log(url);
    }
}