## mix-blend-mode Overlay multiple gradient backgrounds

Using background-blend-mode | mix-blend-mode can achieve many interesting animation blending effects.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### mix-blend-mode

In addition to `mix-blend-mode`, CSS also provides a `background-blend-mode`. That is the blending mode of the background.

+ It can be a mixture of background images and background images,
+ Can also be a mix between background image and background color.

With blending modes, we can let our imagination run wild.

### Multiple gradient backgrounds with multiple blending modes

The principle is roughly this:

![bg5](https://user-images.githubusercontent.com/8554143/100539321-a3c11c80-3270-11eb-89ec-61aff7012be1.gif)

HTML：

```
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

SCSS：
```scss
html, body {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    padding-bottom: 100px;
}

div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

div:nth-child(1) {
    background: linear-gradient(
        238deg,
        rgb(130, 255, 0) 0%,
        rgb(0, 84, 166) 100%
    );
    animation: move 12s infinite linear;
}

div:nth-child(2) {
    background: linear-gradient(238deg, rgb(33, 200, 69) 0%, rgb(0, 0, 100) 100%);
    mix-blend-mode: overlay;
    animation: move 6s infinite linear;
}

div:nth-child(3) {
    background: linear-gradient(238deg, rgb(200, 255, 255) 48%, rgb(3, 0, 151) 100%);
    mix-blend-mode: multiply;
    animation: move 6s infinite linear;
}

div:nth-child(4) {
    background: radial-gradient(
        100% 85% at 0% 100%,
        rgb(0, 0, 0) 0%,
        rgb(0, 131, 255) 50%,
        rgb(255, 0, 0) 100%
    );
    mix-blend-mode: difference;
    animation: move 6s infinite linear;
}

div:nth-child(5) {
    background: radial-gradient(
        100% 225% at 0% 100%,
        rgb(255, 0, 0) 0%,
        rgb(66, 255, 0) 100%
    );
    mix-blend-mode: difference;
    animation: move 6s infinite linear;
}

div:nth-child(6) {
    background: radial-gradient(
        100% 140% at 100% 0%,
        rgb(0, 134, 62) 0%,
        rgb(0, 239, 255) 50%,
        rgb(0, 113, 186) 100%
    );
    mix-blend-mode: overlay;
    animation: move 6s infinite linear;
}

@keyframes move {
    0% {
        filter: unset;
    }
    
    100% {
        filter: hue-rotate(360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="mix-multi-graidient-bg" src="https://codepen.io/dvha/embed/eYbjKMM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/eYbjKMM">
  mix-multi-graidient-bg</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>