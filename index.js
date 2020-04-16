'use strict'

// From https://italonascimento.github.io/applying-a-timeout-to-your-promises/
const promiseTimeout = (ms, promise) => {
  // Create a promise that rejects in <ms> milliseconds
  let timeout = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id)
      reject('Timed out in ' + ms + 'ms.')
    }, ms)
  })

  // Returns a race between our timeout and the passed in promise
  return Promise.race([promise, timeout])
}

const parseOption = (options, key) => {
  if (key in options) {
    return options[key]
  } else if (key in defaults) {
    return defaults[key]
  } else {
    return undefined
  }
}

const defaults = {
  timeout: 1000 * 60 * 60 * 24,
  crossOrigin: undefined
}

export const info = async (src, options = {}) => {
  const ms = parseOption(options, 'timeout')
  return promiseTimeout(
    ms,
    new Promise(async resolve => {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.crossOrigin = parseOption(options, 'crossOrigin')
      video.addEventListener('loadedmetadata', async () => {
        resolve({
          duration: video.duration,
          videoHeight: video.videoHeight,
          videoWidth: video.videoWidth
        })
      })

      // set video src *after* listening to events in case it loads so fast
      // that the events occur before we were listening.
      video.src = src
    })
  )
}

export default {info}
