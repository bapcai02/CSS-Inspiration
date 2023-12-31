## 3D cube progress bar

Make a cool progress bar using a cube implemented in CSS 3D.

### key point

+ You can use CSS Property to achieve gradient animation effects
+ You can use the hue-rotate change of the filter to achieve overall color changes


HTML：
```
<div class="demo-cube perspective percentage">
  <ul class="cube">
    <li class="top"></li>
    <li class="bottom"></li>
    <li class="front"></li>
    <li class="back"></li>
  </ul>
</div>

<div class="demo-cube perspective colorful">
  <ul class="cube">
    <li class="top"></li>
    <li class="bottom"></li>
    <li class="front"></li>
    <li class="back"></li>
  </ul>
</div>

<div class="demo-cube perspective pink">
  <ul class="cube">
    <li class="top"></li>
    <li class="bottom"></li>
    <li class="front"></li>
    <li class="back"></li>
  </ul>
</div>
```

SCSS：
```scss
@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

body,
html {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #EEEFED, #F9E3E9);
  display: flex;
  flex-direction: column;
}

.demo-cube {
  margin: auto;
}

.perspective {
  transform-style: preserve-3d;
  perspective: 520px;
  transform: rotateX(15deg);
}

ul {
  padding: 0;
  list-style: none;
}

.demo-cube {
  position: relative;
  width: 100%;
  height: 200px;

  .cube {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 100px;
    transform-style: preserve-3d;
    transform-origin: 50px 50px;
    transform: translate(-50%, -50%) rotateX(-33.5deg);

    li {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      // background: rgba(156, 39, 176, .4);
      // border: 1px solid #ddd;
    }
    .top {
      width: 300px;
      transform: rotateX(90deg) translateZ(50px);
    }
    .bottom {
      width: 300px;
      transform: rotateX(-90deg) translateZ(50px);
    }
    .front {
      width: 300px;
      transform: translateZ(50px);
    }
    .back {
      width: 300px;
      transform: rotateX(-180deg) translateZ(50px);
    }
  }
}

.percentage .cube {
  .top,
  .front,
  .bottom,
  .back {
    background: linear-gradient(90deg, rgba(156, 39, 176, .3), rgba(255, 34, 109, .8) 65%, rgba(255, 255, 255, .6) 65%, rgba(255, 255, 255, .6));
  }
}

.colorful {
  animation: hueRotate 10s infinite linear;
  .cube {
    .top,
    .front,
    .bottom,
    .back {
        background: linear-gradient(90deg, rgba(40, 101, 127, .9), rgba(133, 165, 181, .5) 85%, rgba(255, 255, 255, .6) 85%, rgba(255, 255, 255, .6));
    }
  }
}
.pink .cube {
  .top,
  .front,
  .bottom,
  .back {
    background: linear-gradient(90deg, rgba(255, 217, 34, .6), rgba(255, 34, 109, .8) var(--per), rgba(255, 34, 109, .1) var(--per), rgba(255, 34, 109, .1));
    animation: perChange 6s infinite;
  }
}

@keyframes perChange {
  0% {
    --per: 0%;
  }
  90%,
  to {
    --per: 80%;
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

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-cuber-progress-bar" src="https://codepen.io/dvha/embed/abPjWpj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/abPjWpj">
  3d-cuber-progress-bar</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>