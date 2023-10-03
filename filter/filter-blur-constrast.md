## Use filter:blur | filter:constrast to generate special blending effects

Use filter:blur | filter:constrast to generate special blending effects.

### key point 

In this example, two separate filters are taken out, and their functions are:

+ filter: blur(): Set a Gaussian blur effect to the image.
+ filter: contrast(): Adjust the contrast of the image.

However, when they "fit" together, a wonderful fusion phenomenon occurred. The contrast filter was used to remove the blurred edges of the Gaussian blur, and the Gaussian blur was used to achieve the fusion effect.

----

HTML:

```pug
// pug template
.container
     .bg
     - for(var i=0; i<1; i++)
         .box
```

SCSS：
```scss
.container {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    filter: contrast(20);
}

.bg {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #000;
    filter: contrast(20) blur(6px);
    
}

.box {
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translate(-50%, -50%) rotate(0);
    background-color: blue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    filter: unset;
    filter: contrast(20) blur(6px);
    animation: turn 5s linear infinite;
    transform-origin: -100% center;
}

@keyframes turn {
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-blur-constrast" src="https://codepen.io/dvha/embed/xxmJard?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/xxmJard">
  filter-blur-constrast</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>