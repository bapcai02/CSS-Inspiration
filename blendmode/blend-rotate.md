## mix-blend-mode implements color overlay rotation animation

mix-blend-mode implements color overlay rotation animation.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### key point

The `mix-blend-mode: difference` difference mode is used here. By looking at the color information in each channel, comparing the background color and the drawing color, subtracting the pixel value of the darker pixel from the pixel value of the brighter pixel Pixel values. Mixing with white will invert the base color; mixing with black will produce no change.

Generally speaking, the bright area of the upper layer inverts the color of the lower layer, and the dark area displays the color normally. The effect is completely opposite to the original image.

Take a look at how this blending mode can be used in some multi-layer effects to produce very gorgeous blending effects:

HTML：

```pug
// pug template
.container
    -for (var x = 0; x < 6; x++)
        .box
```

SCSS：
```scss
$count : 6;
$each: 360deg / $count;
$distance: 100px;
$boxshadow: 25px;

body {
    background-color: #000;
    overflow: hidden;
}

.container {
    position: absolute;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.box {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    background: rgb(0, 0, 0);
    box-shadow: inset 0 $boxshadow 0 $boxshadow rgb(255, 255, 255);
    mix-blend-mode: difference;
}

@for $i from 1 through $count {
    $curRotate: $i * $each;
    
    .box:nth-child(#{$i}) {
        transform: rotate($curRotate) translate(0, 50%);
        animation: move#{$i} 10s linear infinite alternate;
    }
    
    @keyframes move#{$i} {
        100% {
            transform: rotate(calc(1080deg + #{$curRotate})) translate($distance);
        }
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-rotate" src="https://codepen.io/dvha/embed/abPjKVa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/abPjKVa">
  blend-rotate</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>