## Ball shuttle zoom loading animation

The ball shuttles and enlarges the loading animation.

### key point 

Two filters, blur and contrast, are mainly used. Their functions are:

+ filter: blur(): Set a Gaussian blur effect to the image.
+ filter: contrast(): Adjust the contrast of the image.

However, when they "fit" together, a wonderful fusion phenomenon occurred. The contrast filter was used to remove the blurred edges of the Gaussian blur, and the Gaussian blur was used to achieve the fusion effect.

----

HTML：

```HTML
<div class="g-container">
    <div class="g-first"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
</div>
```

SCSS：
```scss
$count: 7;

body,
html {
    width: 100%;
    height: 100%;
    display: flex;
    filter: blur(4px) contrast(8);
    background: #000;
    display: flex;
}

.g-container {
    margin: auto;
    position: relative;
    width: 10vmin;
    height: 10vmin;
}

.g-ball,
.g-first{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 50%;
    transform: translate(-700%, 0);
    opacity: 0;
    // animation: move 3s infinite linear;
}

@for $i from 0 through $count { 
    .g-ball:nth-child(#{$i}) {
        animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
    }
}

.g-first {
    animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
    25% {
        opacity: 1;
        transform: translate(-1vw, 0);
    }
    50% {
        opacity: 1;
        transform: translate(1vw, 0);
    }
    75%,
    100% {
        opacity: 0;
        transform: translate(700%, 0);
    }
}


@keyframes scaleMove {
    25% {
        opacity: 1;
        transform: translate(-1vw, 0);
    }
    35% {
        opacity: 1;
        transform: scale(1);
    }
    70% {
        opacity: 1;
        transform: translate(1vw, 0) scale(2);
    }
    90%,
    100% {
        opacity: 0;
        transform: translate(1vw, 0) scale(1);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-ball-loading" src="https://codepen.io/dvha/embed/NWeBLjV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/NWeBLjV">
  filter-ball-loading</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>