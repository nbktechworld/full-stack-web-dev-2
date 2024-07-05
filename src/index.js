function changeBackground(){
  const paragraphElement = document.getElementById('first-paragraph')
  paragraphElement.style.backgroundColor = 'lightblue';
  paragraphElement.style.color = 'black';
  paragraphElement.textContent = 'Hello World!';
}

function bark() {
  // document.getElementsByClassName('js-audio-player')[0].play();
  document.querySelector('.js-audio-player').play();
}

const images = [
  'https://www.rd.com/wp-content/uploads/2016/01/04-dog-breeds-dalmation.jpg',
  'https://fthmb.tqn.com/TAO44DCR8TZRNVwD6OlGfFtfi30=/5040x3347/filters:fill(auto,1)/greyhound-dog-outdoors-200346044-001-589608495f9b5874ee23ee68.jpg',
  'https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg?w=1920&q=75',
];
let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  document.getElementsByTagName('img')[0].src = images[currentImageIndex];
}
