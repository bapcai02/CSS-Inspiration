## 3D Cube Scroll 404 Effect

A 404 effect made using a cube implemented in CSS 3D.

### key point

Its core is based on a CSS 3D cube:

1. Add cube scrolling animation
2. Control the easing function of falling and the shaking animation of landing (in order to make the effect more realistic, techniques such as preparatory movements, following and overlapping animations in the design animation are used)
3. Control the translation of the cube and ground digital images
4. Control the infinite loop of animation

The overall production is still very difficult, but when used on your own 404 page, it is indeed very cool. I first saw this effect in [Yusuke Nakaya](https://codepen.io/YusukeNakaya). You can also click here for the complete code: [CodePen -- Only CSS: 404 Rolling Box](https://codepen. io/YusukeNakaya/pen/YLPVER)

HTML (using Pug template engine):
```
.rail
  - for (i = 0; i < 10; i++)
    .stamp.four 4
    .stamp.zero 0
.world
  .forward
    .box
      - for (i = 0; i < 6; i++)
        .wall
```

SCSS：
```scss
body {
  background: #fff;
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

$wallSize: 200px;

div {
  transform-style: preserve-3d;
}
.rail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(-30deg) rotateY(-30deg);
  .stamp {
    position: absolute;
    width: $wallSize;
    height: $wallSize;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 20, 20, 1);
    color: #fff;
    font-size: 7rem;
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation: stampSlide 20 * 2000ms ($i * -2000) - 300ms linear infinite;
      }
    }
  }
}
@keyframes stampSlide {
  0% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize) translateY(130px);
  }
  100% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize) translateY(130 - 200 * 20px);
  }
}
.world {
  transform: rotateX(-30deg) rotateY(-30deg);
  .forward {
    position: absolute;
    animation: slide 2000ms linear infinite;
  }
  .box {
    width: $wallSize;
    height: $wallSize;
    transform-origin: 100% 100%;
    animation: roll 2000ms cubic-bezier(1.000, 0.010, 1.000, 1.000) infinite;
    .wall {
      position: absolute;
      width: $wallSize;
      height: $wallSize;
      background: rgba(10, 10, 10, 0.8);
      border: 1px solid rgba(250, 250, 250, 1);
      box-sizing: border-box;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 7rem;
      }
      &:nth-child(1) {
        transform: translateZ($wallSize / 2);
      }
      &:nth-child(2) {
        transform: rotateX(180deg) translateZ($wallSize / 2);
      }
      &:nth-child(3) {
        transform: rotateX(90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(4) {
        transform: rotateX(-90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(5) {
        transform: rotateY(90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
      &:nth-child(6) {
        transform: rotateY(-90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
    }
  }
}

@keyframes zeroFour {
  0% {
    content: '4';
  }
  100% {
    content: '0';
  }
}

@keyframes roll {
  0% {
    transform: rotateZ(0deg);
  }
  85% {
    transform: rotateZ(90deg);
  }
  87% {
    transform: rotateZ(88deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-$wallSize);
  }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dvha/embed/zYyLwjm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/zYyLwjm">
  Untitled</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>