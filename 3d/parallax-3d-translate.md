## Use translateZ to implement scrolling parallax

Use `translateZ` to implement scrolling parallax.

Parallax Scrolling refers to making multiple layers of background move at different speeds to form a three-dimensional motion effect and bring an excellent visual experience. As a hot trend in web design, more and more websites apply this technology.

### key point

+ We set transform-style: preserve-3d and perspective: xpx to the container, then the child elements in this container will be located in 3D space,

+ Then set different transform: translateZ() for the child elements. At this time, the distance of different elements from the screen (our eyes) in the 3D Z-axis direction is also different.

+ When scrolling the scroll bar, since the child elements are set to different transform: translateZ(), the up and down distance translateY of their scrolling is also different relative to the screen (our eyes), which achieves the effect of scrolling parallax.

For detailed analysis, please see: [Scrolling Parallax? CSS is a piece of cake](https://www.cnblogs.com/coco1s/p/9453938.html)

HTML：

```html
<div class="g-container">
    <div class="section-one">translateZ(-1)</div>
    <div class="section-two">translateZ(-2)</div>
    <div class="section-three">translateZ(-3)</div>
</div>
```

SCSS：
```scss
html {
    height: 100%;
    overflow: hidden;
}

body {
    margin: 0;
    padding: 0;
    perspective: 2px;
    transform-style: preserve-3d;
    transform-origin: center center;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.g-container {
    position: relative;
    height: 150%;
    
    & > div {
        font-size: 5vw;  
        position: absolute;
        top: 20%;
    }
    
    .section-one {
        left: 0%;
        background: rgba(10, 10, 10, .2);
        transform: translateZ(-1px);
    }
    
    .section-two {
        left: 40%;
        background: rgba(30, 130, 30, .2);
        transform: translateZ(-2px);
    }
    
    .section-three {
        left: 90%;
        background: rgba(200, 100, 130, .2);
        transform: translateZ(-3px);
    }
}
```

The effect is as follows，scroll page（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="parallax-3d-translate" src="https://codepen.io/dvha/embed/dywjWgb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/dywjWgb">
  parallax-3d-translate</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>