const videoSrc = getURL('videoSrc');
function getURL(nameVideo) {
    const urlPara = new URLSearchParams(window.location.search); 
    return urlPara.get(nameVideo);
}

// function changeTitle() {
//     if(videoSrc) {
//         const videoTitle = document.getElementsByClassName('videoTitle'); 

//         videoTitle.innerHTML = "Hello!";
//     }
// }

window.onload = function() {    
    if(videoSrc) {
        const videoElement = document.getElementById('videoPlayer'); 
        const sourceElement = document.getElementById('videoSource'); 

        sourceElement.src = videoSrc; 
        videoElement.load(); 
    } else {
        alert('This video does not exist!');
    }
}
