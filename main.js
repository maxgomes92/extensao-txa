const imgs = document.getElementsByTagName('img')
const urls = [
  'https://i.imgur.com/8Yb0v8u.jpg',
  'https://i.imgur.com/b3wMjK8.jpg'
]

for (let i=0; i < imgs.length; i++) {
  imgs[i].src =  urls[i%2]
}