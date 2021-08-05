// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
console.log('is running')
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
 
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('here')
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replace,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
function replace() {
  console.log('hello')
    let filenames = ['https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/master/w_1600%2Cc_limit/dog-unsolicited.jpg', 'https://i.ytimg.com/vi/mRf3-JkwqfU/sddefault.jpg'];
    let imgs = document.getElementsByTagName('img')
    for (let image of imgs) {
        const r = Math.floor(Math.random() * filenames.length);
        image.src = filenames[r];
    }
}
