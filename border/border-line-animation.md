## Make use of border-radius, single label line animation

Make full use of border-radius, single label line animation.

### key point 

This effect is actually more due to the blur and contrast filters of filter.

Then get it by rotating `border-radius` four divs with different corner values.

----

HTML：

```html
<div></div>
```

SCSS：
```scss
html,
body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
body {
    background: #000;
    filter: blur(5px) contrast(20);
    
    &::before {
        position: absolute;
        content: "";
        background: #000;
        top: 0;
        left: 0;
        right: 0;
        height: 20vh;
        z-index: 10;
    }
}

div {
    position: relative;
    width: 30vmin;
    height: 30vmin;
    margin: 30vh auto;
    // border: 1vmin solid #fff; 
    border-radius: 46% 42% 47% 44%;
    background: linear-gradient(#fff, #9c27b0);
    transform: scale(15) translate(0, -13vh) rotate(0deg);
    animation: rotate 10s infinite linear alternate;

    &::before {
        content: "";
        position: absolute;
        width: 99%;
        height: 99%;
        background: #000;
        border-radius: 46% 42% 47% 44%;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
}

@keyframes rotate {
    100% {
        transform: scale(10) translate(0, -15vh) rotate(360deg);
    }
}

@keyframes move {
    50% {
        left: 50%;
        right: 49.95%;
    }
    100% {
        left: 90%;
        right: 9.7%;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-line-animation" src="https://codepen.io/dvha/embed/dywjKeB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/dywjKeB">
  border-line-animation</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>