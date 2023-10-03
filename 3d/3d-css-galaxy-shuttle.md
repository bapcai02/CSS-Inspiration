## 3D universe time travel effect

Use CSS 3D to achieve starry sky shuttle effect

### key point

1. Select a suitable starry sky map
2. Use 5 elements to set up the above-mentioned starry sky map, and under the influence of 3D effect, it can cover the whole screen in 5 directions: up, down, left, center and middle.
3. The parent container sets the `translateZ` animation of the container under a very small `perspective` value to achieve the effect.
4. Use two sets of the same animation, one of which is set with a negative delay to achieve animation connection.

HTML：
```
<div class="g-container">
  <div class="g-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>   
      <div class="item item-top"></div>
      <div class="item item-bottom"></div> 
      <div class="item item-middle"></div>    
  </div>
  <div class="g-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>   
      <div class="item item-top"></div>
      <div class="item item-bottom"></div>   
      <div class="item item-middle"></div>    
  </div>
</div>
```

SCSS：
```scss
html, body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
  text-align: center;
}

body:before{
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.g-container{
  display: inline-block;
  vertical-align: middle;
  perspective: 4px;
  perspective-origin: 50% 50%;
  position: relative;
  animation: hueRotate 21s infinite linear;
}

.g-group{
  position: absolute;
/*   perspective: 4px; */
  width: 1000px;
  height: 1000px;
  left: -500px;
  top: -500px;
  transform-style: preserve-3d;
  animation: move 12s infinite linear;
  animation-fill-mode: forwards;
}

.g-group:nth-child(2){
  animation: move 12s infinite linear;
  animation-delay: -6s;
}

.item {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(https://z3.ax1x.com/2021/08/20/fLwuMd.jpg);
  background-size: cover;
  opacity: 1;
  animation: fade 12s infinite linear;
  animation-delay: 0;
}

.g-group:nth-child(2) .item {
  animation-delay: -6s;
}

.item-right {
  transform: rotateY(90deg) translateZ(500px);
}

.item-left {
  transform: rotateY(-90deg) translateZ(500px);
}

.item-top {
  transform: rotateX(90deg) translateZ(500px);
}

.item-bottom {
  transform: rotateX(-90deg) translateZ(500px);
}

.item-middle {
  transform: rotateX(180deg) translateZ(1000px);
}

@keyframes move {
  0%{
    transform: translateZ(-500px) rotate(0deg);
  }
  100%{
    transform: translateZ(500px) rotate(0deg);
  }
}

@keyframes fade {
  0%{
    opacity: 0;
  }
  25%,
  60%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

@keyframes hueRotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-css-galaxy-shuttle" src="https://codepen.io/dvha/embed/QWzBvdd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/QWzBvdd">
  3d-css-galaxy-shuttle</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>