# Fetch info of a video

Fetch the duration, height and width of a video.

## Installing

`vidvid-info` is an ES module meant to be used in browsers.

```javascript
import { info } from 'https://unpkg.com/vidvid-info'
```

## Usage

```javascript
import * as vidvid from 'https://unpkg.com/vidvid-info'

const src =
  'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'

await vidvid.info(src)
//=> {duration: 596.503219, videoHeight: 360, videoWidth: 640}

await vidvid.info(src, { timeout: 10 })
//=> Timed out in 10ms.
```

## API

<a name="info" href="#info">#</a> vidvid.<b>info</b>(<i>src</i>[,
<i>options</i>]) ·
[Source](https://github.com/severo/vidvid-info/blob/master/index.js),
[Examples](https://observablehq.com/@severo/hello-vidvid-info)

Fetches the video metadata at the specified <i>src</i> URL. It returns a Promise
that resolves an Object with the following fields:

- `duration`: the video
  [duration](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration)
  in seconds
- `videoHeight`: the video
  [height](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoHeight)
  in px
- `videoWidth`: the video
  [width](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoWidth)
  in px

It timeouts after <i>options.timeout</i> (in ms) or one day by default.

If <i>options.crossOrigin</i> is
[specified](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin#Value),
CORS is used to fetch the video metadata. By default, no CORS is used.
