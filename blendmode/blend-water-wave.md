## CSS WAVE MOVE (stunning water wave effect)

Use mix-blend-mode to achieve stunning water wave effects.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### mix-blend-mode

In addition to `mix-blend-mode`, CSS also provides a `background-blend-mode`. That is the blending mode of the background.

+ It can be a mixture of background images and background images,
+ Can also be a mix between background image and background color.

### key point

This example is the combination of `background-blend-mode`, `mix-blend-mode` and filters.

HTML：

```html
<div></div>
```

SCSS：
```scss
$circles: ();
$move: ();
$n: 8;

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@for $i from 0 through $n {
    $start-x: randomNum(100, 1) * 1vw;
    $start-y: randomNum(100, 1) * 1vh;

    $end-x: randomNum(150, -50) * 1vw;
    $end-y: randomNum(150, -50) * 1vh;

    $circles: append(
        $circles,
        radial-gradient(
                randomNum(75, 25) * 1vw,
                #ddd 0%,
                #666 10%,
                #fff,
                #000,
                #999
            )
            $start-x $start-y,
        comma
    );

    $move: append($move, $end-x $end-y, comma);
}

html,
body {
    width: 100%;
    height: 100%;
    overflow:hidden;
}

div {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom :0;
    background: $circles;
    animation: waveMove 15s infinite linear alternate;
    background-blend-mode: difference;
    filter: blur(2px) hue-rotate(0);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #03a9f4;
        mix-blend-mode: color-burn;
    }
}

@keyframes waveMove {
    100% {
        background-position: $move;
        filter: blur(5px) hue-rotate(30deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-water-wave" src="https://codepen.io/dvha/embed/poqZKLW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/poqZKLW">
  blend-water-wave</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>