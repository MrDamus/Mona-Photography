  window.onload = function(){
    // Get the modal
    var modal = document.getElementById('myModal');
    
  // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName('galleryImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    const imgArray = Array.from($(".galleryImg")).map(img => img.src);
    // Get the previous and enxt buttons
    const prevButton = $(".prev");
    const nextButton = $(".next");

    let currentIndex = 0;

    function selectImageByIndex(index){
      if (index < 0){
        currentIndex = imgArray.length - 1;
      }
      else if (index >= imgArray.length -1){
        currentIndex = 0;        
      } else {
        currentIndex = index;
      }
      modalImg.src = imgArray[currentIndex];
      modal.style.display = "block";
    }


    $('.prev').on('click' ,() => {
      selectImageByIndex(currentIndex - 1)
    })
    $('.next').on('click' ,() => {
      selectImageByIndex(currentIndex + 1)
    })
  
  for (var i = 0; i < img.length; i++) {
    var thumb = img[i];
    thumb.onclick = function(event ){
      event.preventDefault()
      selectImageByIndex(imgArray.indexOf(this.src))
  }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

  modal.onmousedown = function() {
    if(!$('#arrowsWrapper').is(":hover")){
      modal.style.display = "none";
    }
  }

  }