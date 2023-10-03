## SVG text hover line animation 2

SVG text hover line animation

### key point

Used `stroke-dasharray` and `stroke-dashoffset` to control line animation.

For details, you can read this article of mine:

[[Web Animation] Introduction to SVG Line Animation](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<svg viewBox="0 0 800 600">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="35%" class="text--line" >Swing</text>
    <text text-anchor="middle" x="50%" y="68%" class="text--line2">Text</text>
  </symbol>
  <g class="g-ants">
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
  </g>
</svg>
```

SCSS：
```scss

body {
  background: #000;
  background-size: .12em 100%;
  font: 16em/1 Arial;
}

.text--line {
  font-size: .5em;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 7% 28%;
  stroke-width: 3px;
  -webkit-animation: stroke-offset 9s infinite linear;
          animation: stroke-offset 9s infinite linear;
}
.text-copy:nth-child(1) {
  stroke: #360745;
  stroke-dashoffset: 7%;
}
.text-copy:nth-child(2) {
  stroke: #D61C59;
  stroke-dashoffset: 14%;
}
.text-copy:nth-child(3) {
  stroke: #E7D84B;
  stroke-dashoffset: 21%;
}
.text-copy:nth-child(4) {
  stroke: #EFEAC5;
  stroke-dashoffset: 28%;
}
.text-copy:nth-child(5) {
  stroke: #1B8798;
  stroke-dashoffset: 35%;
}

@-webkit-keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }
}

@keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }
}
```

The effect is as follows（Hover the button below to see the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-line-text-2" src="https://codepen.io/dvha/embed/WNLgxaK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/WNLgxaK">
  svg-line-text-2</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>