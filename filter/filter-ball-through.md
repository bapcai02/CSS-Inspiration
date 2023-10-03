## Ball shuttle effect

Ball shuttle effect.

### key point 

Two filters, blur and contrast, are mainly used. Their functions are:

+ filter: blur(): Set a Gaussian blur effect to the image.
+ filter: contrast(): Adjust the contrast of the image.

However, when they "fit" together, a wonderful fusion phenomenon occurred. The contrast filter was used to remove the blurred edges of the Gaussian blur, and the Gaussian blur was used to achieve the fusion effect.

----

HTML：

```HTML
<div class="ball"></div>

<div class="g-wall"></div>
<div class="g-wall"></div>
<div class="g-wall"></div>
<div class="g-wall"></div>
```

SCSS：
```scss
body {
    background: #000;
    filter: blur(5px) contrast(10);
    overflow: hidden;
}

.ball {
    position: absolute;
    left: 0; 
    top: 40vh;
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
    background: #fff;
    animation: move 10s infinite;
    
}

.g-wall {
    position: absolute;
    left: 20%; 
    top: 30vh;
    height: 40vh;
    width: 15vh;
    border-radius: 50%;
    background: rgba(0, 0, 0, .5);
}

.g-wall:nth-child(2) {
    left: 40%; 
    border-radius: 50%;
}

.g-wall:nth-child(3) {
    left: 60%; 
    border-radius: 50%;
}

.g-wall:nth-child(4) {
    left: 80%; 
    border-radius: 50%;
}

@keyframes move {
    
    20% {
        transform: translate(20vw, 0);
        background: #ddd;
    }
    
    100% {
        transform: translate(100vw, 0);
        background: #ddd;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-ball-through" src="https://codepen.io/dvha/embed/rNorZwL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/rNorZwL">
  filter-ball-through</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>