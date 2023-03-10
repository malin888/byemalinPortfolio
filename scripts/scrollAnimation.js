const html = document.documentElement;
const canvas = document.getElementById("animation-scrolling");
const context = canvas.getContext("2d");


const frameCount = 148;
const currentFrame = index => (
    `../assets/img/gifs/oblationFrames/${index.toString().padStart(3, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=342;
canvas.height=684;
img.onload=function(){
  context.drawImage(img, 0, 0, 342, 684);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, 342, 684);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
