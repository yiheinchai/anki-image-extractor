function getAllPictures() {
    const image_ids = []
    document.querySelectorAll('img').forEach((img => {
        if (!img.currentSrc.includes('svg') && !image_ids.find((exstImg => exstImg.currentSrc == img.currentSrc))) {
        image_ids.push(img)
        }
    }))
    return image_ids
}

function replacePictures() {
  document.querySelector('body').innerHTML = ''
  getAllPictures().forEach((i) => document.querySelector('body').appendChild(i))
}
