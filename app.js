
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandom(10,100);

let currentIndex = 0;
let zoomedIn = false;

const getImage = async () =>{
    url = "https://picsum.photos/v2/list?page=2&limit="+num;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    return data;
}
let i =0
    getImage()
    .then(function(image){image
        .forEach(im => {
            // console.log(im);
        document.getElementById("image"+i).src = im.download_url;
            i++;
    });}) 
    .catch(function(error){console.log("error" + error);})


let q ;

function zoomImage(image) {
    let u = document.getElementById(image);    
    q = image;

  const zoomImageDiv= document.createElement("div");
  zoomImageDiv.classList.add("zoom-container");

  const zoomImage = document.createElement("img");
  zoomImage.setAttribute("src", u.getAttribute("src"));
  zoomImage.addEventListener("click", () => {
    zoomImageDiv.remove();

  });


  zoomImageDiv.appendChild(zoomImage);
  document.body.appendChild(zoomImageDiv);

}

function prevImage() {
    let name  = q;
    name = q.substring(0, 5);
    let r = q.substring(5,6);
    if(r>0)r--;
    zoomImage(name+r);
  }
  
  function nextImage() {
    let name  = q;
    // console.log(name);
        name = q.substring(0, 5);
        let r = q.substring(5,6);
        if(r<10)r++;
    
    zoomImage(name+r);
  }
  
