## Make use of border-radius to implement wave animation

Make use of border-radius to implement wave animation.

### key point 

+ Use border-radius to generate ellipse
+ Instead of using the rotating ellipse itself to generate a wave effect, it uses it to cut the background and create a wave effect.

For details, see: [Pure CSS to achieve wave effect! ](https://www.cnblogs.com/coco1s/p/7197662.html)

----

HTML：

```html
<h2>Pure Css Wave</h2>
```

SCSS：
```scss
body {
    position: relative;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(118, 218, 255);
    overflow: hidden;

    &:before, &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fff;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }

    &:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}

h2 {
    position: relative;
    color: #333;
    z-index: 10;
    text-align: center;
    height: 100vh;
    line-height: 140vh;
    font-size: 8vw;
    text-shadow: 3px 3px 2px #999;
}


```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-wave" src="https://codepen.io/dvha/embed/PoXBaLG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/PoXBaLG">
  border-wave</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>