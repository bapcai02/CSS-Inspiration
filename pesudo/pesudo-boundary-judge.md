## Pseudo elements realize boundary intelligent judgment and movement

Pseudo elements implement intelligent judgment and movement of boundaries.



### key point

+ Use pseudo elements to generate 4 triangles to form a square, and determine the user's operation direction by hovering which transparent triangle.

Of course, the **pseudo element** is not necessary in this question, it just simplifies the use of tags.

-------

HTML：
```html
<div class="box">
    <div class="box__right">Right → Left</div>
    <div class="box__left">Left → Right</div>
    <div class="box__top">Top → Bottom</div>
    <div class="box__bottom">Bottom → Top</div>
    <div class="box__center">Hover from any side</div>
</div>
```

SCSS：
```scss
.box {
    margin: 5em auto;
    position: relative;
    width: 10em;
    height: 10em;
    line-height: 10em;
    overflow: hidden;
}

.box__right,
.box__left,
.box__top,
.box__bottom,
.box__center {
    position: absolute;
    width: inherit;
    height: inherit;
    text-align: center;
    line-height: inherit;
    transition: transform 0.4s ease;
}

.box__right:before,
.box__left:before,
.box__top:before,
.box__bottom:before,
.box__center:before {
    position: absolute;
    content: "";
    width: 70.71%;
    height: 70.71%;
    transform: rotate(45deg);
}

.box__right:hover,
.box__left:hover,
.box__top:hover,
.box__bottom:hover,
.box__center:hover {
    transform: translateX(0);
    z-index: 1;
}

.box__right:hover:before,
.box__left:hover:before,
.box__top:hover:before,
.box__bottom:hover:before,
.box__center:hover:before {
    width: 100%;
    height: 100%;
    transform: none;
}

.box__right {
    background: blue;
    transform: translateX(100%);
}

.box__right:before {
    right: 100%;
    bottom: 0;
    transform-origin: 100% 100%;
}

.box__right:hover ~ .box__center {
    transform: translateX(-100%);
}

.box__left {
    background: green;
    transform: translateX(-100%);
}

.box__left:before {
    left: 100%;
    transform-origin: 0 0;
}

.box__left:hover ~ .box__center {
    transform: translateX(100%);
}

.box__top {
    background: red;
    transform: translateY(-100%);
}

.box__top:before {
    top: 100%;
    right: 0;
    transform-origin: 100% 0;
}

.box__top:hover ~ .box__center {
    transform: translateY(100%);
}

.box__bottom {
    background: yellow;
    transform: translateY(100%);
}

.box__bottom:before {
    bottom: 100%;
    left: 0;
    transform-origin: 0 100%;
}

.box__bottom:hover ~ .box__center {
    transform: translateY(-100%);
}

.box__center {
    background: orange;
    z-index: -1;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-boundary-judge" src="https://codepen.io/dvha/embed/JjwaRPK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/JjwaRPK">
  pesudo-boundary-judge</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>