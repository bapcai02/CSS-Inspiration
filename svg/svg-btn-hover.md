## SVG button hover line animation

SVG button hover line animation.

### key point

Used `stroke-dasharray` and `stroke-dashoffset` to control line animation.

For details, you can read this article of mine:

[ [Web Animation] Introduction to SVG Line Animation](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<a class="container">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>

<a class="container2">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>

<a class="container3">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>

<a class="container4">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>

<a class="container4-5">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>

<a class="container5">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>

<a class="container6">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="outline" height="100%" width="100%" />
    <div class="text">SVG Animations</div>
  </svg>
</a>
```

SCSS：
```scss
$default: #ffcc00;
$pink: deeppink;

html {
  background: #000;
  text-align: center;
  color: $default;
  *,
  *:before,
  *:after {
    @include transition(1s);
    @include box-sizing(border-box);
  }
}

[class^="container"] {
  display: block;
  position: relative;
  color: $default;
  text-decoration: none;
  @include size(250px, 50px);
  margin: 50px auto;
  overflow: hidden;
  .outline {
    @include coverer;
    stroke: $default;
    stroke-width: 2px;
    fill: transparent;
  }
  .text {
    @include relative(-40px);
    font-family: 'Helvetica';
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &:hover {
    .outline {
      stroke: $pink;
    }
    .text {
      color: $pink;
    }
  }
}

.container {
  .outline {
    stroke-dasharray: 25 25;
    stroke-dashoffset: -588;
  }
  &:hover {
    .outline {
      stroke-dasharray: 50 50;
      stroke-dashoffset: -275;
    }
  }
}

.container2 {
  .outline {
    stroke-dasharray: 50 250;
    stroke-dashoffset: -575;
  }
  &:hover {
    .outline {
      stroke-dasharray: 50 100;
      stroke-dashoffset: -75;
    }
  }
}

.container3 {
  .outline {
    stroke-dasharray: 70 230;
    stroke-dashoffset: 60;
  }
  &:hover {
    .outline {
      stroke-dashoffset: -350;
    }
  }
}

.container4 {
  .outline {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
    @include transition(0.5s);
  }
  &:hover {
    .outline {
      stroke-dashoffset: -250;
    }
  }
}

@include keyframes(woop) {
  0% {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
  }
  40%, 50% {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -250;
  }
  100% {
    stroke-dasharray: 600 0;
    stroke-dashoffset: 25;
  }
}

.container4-5 {
  .outline {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
    @include transition(1s);
  }
  &:hover {
    .outline {
      stroke-dasharray: 600 0;
      stroke-dashoffset: 25;
      @include animation(woop 1s linear);
    }
  }
}

.container5 {
  .outline {
    stroke-dasharray: 100 500;
    stroke-dashoffset: 225;
    @include transition(0.5s);
  }
  &:hover {
    .outline {
      stroke-dasharray: 600 0;
      stroke-dashoffset: 475;
    }
  }
}

.container6 {
  .outline {
    stroke-dasharray: 50 550;
    stroke-dashoffset: 200;
    @include transition(0.5s);
  }
  &:hover {
    .outline {
      stroke-dasharray: 50 250;
      stroke-dashoffset: 500;
    }
  }
}

@include keyframes(bounceRight) {
  0% {
    @include translateX(-100%);
  }
  30% {
    @include translateX(-100%);
  }
  40%, 60%, 80%, 100% {
    @include translateX(0);
  }
  50% {
    @include translateX(-30%);
  }
  70% {
    @include translateX(-15%);
  }
  90% {
    @include translateX(-7.5%);
  }
}
```

The effect is as follows（Hover the button below to see the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="svg-btn-hover" src="https://codepen.io/dvha/embed/abPaZKb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/abPaZKb">
  svg-btn-hover</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>