## Single label to achieve dripping effect

A single label achieves the dripping effect.

### key point 

Two filters, blur and contrast, are mainly used. Their functions are:

+ filter: blur(): Set a Gaussian blur effect to the image.
+ filter: contrast(): Adjust the contrast of the image.

However, when they "fit" together, a wonderful fusion phenomenon occurred. The contrast filter was used to remove the blurred edges of the Gaussian blur, and the Gaussian blur was used to achieve the fusion effect.

----

HTML：

```HTML
<div>MAGICCSS</div>
```

SCSS：
```scss
div {
    position: relative;
    width: 640px;
    height: 106px;
    color: #fff;
    font-size: 124px;
    text-align: center;
    margin: 100px auto;
    border-bottom: 10px solid #fff;
    transform: skewY(5deg);
    
    &::before,
    &::after {
        position: absolute;
        content: "";
        bottom : -20px;
        left: 0;
        width: 10px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        transform: translate(0, 0);
        animation: move 7.5s ease-in-out infinite;
    }
    
    &::after {
        animation: move 7.5s ease-in-out 1s infinite;
    }
}

@keyframes move {
    80% {        
        bottom : -30px;
        transform: translate(623px, 0);
    } 93% {
        transform: translate(623px, 3px);
        opacity: 1;
    }100% {
        transform: translate(623px, 150px);
        opacity: 0;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-single-div-water-drop" src="https://codepen.io/dvha/embed/OJrwozd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/OJrwozd">
  filter-single-div-water-drop</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>