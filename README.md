# Fetch info of a video

## Installing

`video-info` is an ES module meant to be used in browsers.

```javascript
import { info } from 'https://unpkg.com/video-info'
```

## Usage

```javascript
import * as video from 'https://unpkg.com/video-info'

const src =
  'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'

await video.info(src)
//=> {duration: 596.503219, videoHeight: 360, videoWidth: 640}

await video.info(src, { timeout: 10 })
//=> Timed out in 10ms.
```

## API

<a name="info" href="#info">#</a> video.<b>info</b>(<i>src</i>[,
<i>options</i>]) ·
[Source](https://github.com/severo/video-info/blob/master/src/index.js),
[Examples](https://observablehq.com/@severo/hello-video-info)

Fetches the video metadata at the specified <i>src</i> URL. It returns a Promise
that resolves an Object with the following fields:

- [<i>duration</i>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration):
  the video duration in seconds
- [<i>videoHeight</i>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoHeight):
  the video height in px
- [<i>videoWidth</i>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoWidth):
  the video width in px

It timeouts after 1 day, or <i>options.timeout</i> (in ms).

If
[<i>options.crossOrigin</i>](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin#Value)
is specified, CORS is used to fetch the video metadata. By default, no CORS is
used.
