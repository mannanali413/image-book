const download = require('image-downloader')

const options = {
  url:
    'https://ia800306.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/Hujjatullah-il-baligha-UrduTranslation/Hujjatullah-Baligha-urdu_jp2.zip&file=Hujjatullah-Baligha-urdu_jp2/Hujjatullah-Baligha-urdu_{countNumber}.jp2&scale=4&rotate=0',
  dest: './dest'
}

let count = 2

async function downloadIMG(imageOption) {
  try {
    const {filename, image} = await download.image(imageOption)
    console.log(filename) // => /path/to/dest/image.jpg
  } catch (e) {
    console.error(e)
  }
}

async function loadImages() {
  for (let i = 2; i <= 730; i++) {
    let itemIndex = `${i}`
    let zerosToAppend = 4 - itemIndex.length
    while (zerosToAppend > 0) {
      itemIndex = `0${itemIndex}`
      zerosToAppend -= 1
    }
    const imageOption = Object.assign({}, options)
    imageOption.url = imageOption.url.replace('{countNumber}', itemIndex)
    await downloadIMG(imageOption)
  }
}

loadImages()

//   https://ia800306.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/Hujjatullah-il-baligha-UrduTranslation/Hujjatullah-Baligha-urdu_jp2.zip&file=Hujjatullah-Baligha-urdu_jp2/Hujjatullah-Baligha-urdu_0730.jp2&scale=4&rotate=0

// https://ia800306.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/Hujjatullah-il-baligha-UrduTranslation/Hujjatullah-Baligha-urdu_jp2.zip&file=Hujjatullah-Baligha-urdu_jp2/Hujjatullah-Baligha-urdu_0002.jp2&scale=4&rotate=0
