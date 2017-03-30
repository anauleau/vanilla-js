(function init (window) {
  let getBtn = document.getElementById('getGifBtn')
  let gifElement = document.getElementById('gif')
  let attachGIF = (gif, target) => {
    target.src = gif.image_url
  }

  let processTag = tag => {
    return tag.replace(' ', '+')
  }

  let getGIF = tag => {
    let request = new XMLHttpRequest()
    let url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
    url = tag.length > 0 ? url + `&tag=${tag}` : url
    request.responseType = 'json'
    request.onload = () => {
    if (request.status == 200) {
      attachGIF(request.response.data, gifElement)
      }
    }
    request.open('GET', url, true)
    request.send()
  }

  getBtn.addEventListener('click', e => {
    let tag = document.getElementById('searchInput').value
    getGIF(processTag(tag))
  })
})(window);
