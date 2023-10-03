## 3D ball animation

3D ball animation.
### key point

+ With SASS, use formulas to randomly attach 100 points to the surface of the ball, and then perform actions

HTML:

```pug
// pug template
.container    
    - for(var i=0; i<100; i++)
        .point
```

SCSS：
```scss
$n: 100;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgba(randomNum(255), randomNum(255), randomNum(255), randomNum(100)/100);
}

body {
    background: #000;
    overflow: hidden;
}
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate3d(-50%, -50%, 0) rotateY(0deg) rotateZ(0deg);
    transform-style: preserve-3d;
    perspective: 1000;
    animation: fullrotate 10s linear infinite;
    // filter: blur(1px);
}
.point {
    position: absolute;
    top: 95px;
    left: 49%;
    background: #000;
    border-radius: 50%;      
    width: 20px;
    height: 20px;
    // mix-blend-mode: lighten;
    
    @for $i from 1 through $n {        
        $rot-x: random(360) + deg;
        $rot-y: random(360) + deg;
        $radius: 100px;
        
        &:nth-child(#{$i}) {
            transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius);
            background: randomColor();
            filter: blur(0px);
            animation: 
                expand#{$i} 10s linear infinite, 
                sparkle 0.25s linear infinite;
            animation-delay: $i*2ms;
        }
        @keyframes expand#{$i} {
            0% { 
                transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius);
                filter: blur(0px);
                width: 20px;
                height: 20px;
            }
            20%, 40% { 
                transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius*($i/10));
                filter: blur(10px);
                width: 20px;
                height: 20px;
            }
            40%, 60% {
                transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius*4);
                filter: blur(0px);
                width: 40px;
                height: 40px;
            }
            65%, 80% {
                transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius*($i/10));
                filter: blur(10px);
                width: 20px;
                height: 20px;
            }
            85%, 100% {
                transform: rotateY($rot-y) rotateX($rot-x) translateZ($radius);
                filter: blur(0px);
                width: 20px;
                height: 20px;
            }
        }
        @-webkit-keyframes sparkle {
            50% {
                background: lemonchiffon;
            }
        }
    }
}

@keyframes fullrotate {
    to { 
        transform: translate3d(-50%, -50%, 0) rotateY(360deg) rotateZ(360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-ball" src="https://codepen.io/dvha/embed/BavPBoo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/BavPBoo">
  3d-ball</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>