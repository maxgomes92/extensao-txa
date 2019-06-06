const imgs = document.getElementsByTagName('img')
const urls = [
  'https://i.imgur.com/8Yb0v8u.jpg',
  'https://i.imgur.com/b3wMjK8.jpg',
  'https://i.imgur.com/sffsTsw.jpg',
  'https://i.imgur.com/ZdjFTdE.jpg',
  'https://i.imgur.com/3XfLjzm.jpg',
  'https://i.imgur.com/lqQpMmt.jpg',
  'https://i.imgur.com/tbUo79h.jpg',
  'https://i.imgur.com/XuuoD3S.jpg',
  'https://i.imgur.com/eG6G4Qo.jpg',
  'https://i.imgur.com/6spxbim.jpg',
  'https://i.imgur.com/0Hn14CX.jpg',
  'https://i.imgur.com/NeiK7NM.jpg',
]

window.onload = () => {
  for (let i = 0; i < imgs.length; i++) {
    const index = i % urls.length
    imgs[i].src = urls[index]
  }
}