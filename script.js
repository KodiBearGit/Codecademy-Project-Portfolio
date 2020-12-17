//Array of scenic image urls
const scenicPicUrls = [
"https://images.unsplash.com/photo-1546180055-761f3f495b3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
"https://images.unsplash.com/photo-1606925207923-c580f25966b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
"https://images.unsplash.com/photo-1514429059824-3c6fa0808fe6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1606162490200-212b6bb8e371?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2OXxibzhqUUtUYUUwWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];

//Array of alts for images (didn't use objects since they haven't been presented at this point)
const scenicPicAlts = [
  "picture of snow cap mountains, pale blue sky and distant moon",
  "picture of blue ocean near shore",
  "picture of orange and purple sky and lake with  mtns mountains between",
  "close up image of water rippling"
];

let currentImageIndex = function() {
  let currentScenicPicture = document.getElementById('scenic-image').src;
  // console.log(currentScenicPicture);
  return scenicPicUrls.indexOf(currentScenicPicture);
};

let changeImageURL = function() {
  let currentIndex = currentImageIndex();
  let newIndex = currentIndex;  //temp assignment to force random number generation
 //console.log(newIndex);
  do {
    let ranNum = Math.floor(Math.random() * 4);
    newIndex = ranNum;
    //console.log(ranNum);
  } while (newIndex === currentIndex);
  //console.log(newIndex);
  document.getElementById('scenic-image').src = scenicPicUrls[newIndex];
  document.getElementById('scenic-image').alt = scenicPicAlts[newIndex];
};
 
let button = document.getElementById("new-image-button");

button.addEventListener("click", changeImageURL);