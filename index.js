function toggleVoteContainer(){
  //find the vote container on webpage
  var voteContainer = document.getElementById("vote-container");
  console.log(voteContainer.style);
  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;

  //convert string to integer
  likes = parseInt(likes);

  //increase likes value by 1
  likes += 1;

  //change value of likes on page
  element.innerText = likes;
}
//array of cat images through links
var catsImages=["https://orig00.deviantart.net/5013/f/2013/119/0/7/catanim_final_by_eveyammond-d63gbzf.gif", "https://gifprint.s3.amazonaws.com/p/gif/2604/fbdb2780ad70013171c94a728aaf7bad.gif", "https://laughingsquid.com/wp-content/uploads/2016/09/tabby-cat-magic-casper.png?w=640"];
var dogsImages=["http://www.eprintablecoloringpages.com/wp-content/uploads/2013/08/two-dogs-coloring-pages-102-dalmatians-coloring-pages.gif", "https://www.switchvideo.com/wp-content/uploads/2013/04/Dogs-Playing.jpg", "https://media.tenor.com/images/c345ed3435c5b60cee214ad7682b7b05/tenor.gif"];

function changeImage(element) {
  console.log(element.id);

  var animals = [];

  if(element.id === "cats-carousel"){
    animals = catsImages;
  } else {
    animals = dogsImages;
  }

  var carousel = document.getElementById(element.id);

  //get image
  var image = carousel.getElementsByTagName('img')[0];
  //get image's url on page
  var imageUrl = image.getAttribute('src');

  //get index of img on page in animals survey
  var imageIndex = animals.indexOf(imageUrl);

//add 1 to the index; resets to 0 if last element in animals
  if(imageIndex === animals.length - 1){
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }

//reset url to the new url using the new index
  imageUrl = animals[imageIndex];

//change the src for the img element on the webpage
  image.src = imageUrl;


  }
