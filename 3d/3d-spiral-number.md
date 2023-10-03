## 3D Spiral Digital Animation

3D spiral digital animation.

### key point

+ With the help of SASS, just gradually rotate each column of numbers by a certain angle
+ Of course, if you are careful, you should find that every number is always facing the front.

HTML:

```pug
// pug template
.container
    - for(var i=0; i<36; i++)
        .line
            - for(var j=0; j<12; j++)
                .number
```

SCSS：
```scss
$lineNumber: 36;
$column: 12;
$aniTime: 10s;

@function randomNum($max, $min: 0) {
	@return ($min + random($max));
}


html,
body {
    background-color: #000;
    overflow: hidden;
}

.container {
    width: 80vw;
    position: relative;
    margin: 10vh auto;
    transform-style: preserve-3d;
    perspective: 1000px;
    display: flex;
    justify-content: space-between;
    // mix-blend-mode: luminosity;
}

.line {
    width: 20px;
    height: 80vh;
    flex: 0 1 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    .number {
        position: relative;
        font-size: 16px;
        height: calc(80vh / 18);
        border-radius: 50%;
        transform-style: preserve-3d;
        perspective: 1000px;
        box-shadow: 0 0 5px 5px rgba(255, 248, 78, .1),
            inset 0 0 5px 5px rgba(255, 248, 78, .1);
        line-height: calc(80vh / 18);
        
        &::before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;   
            color: #57ff5e;
            text-shadow: 0 0 40px #57ff5e;
        }
    }
}

@for $i from 0 to $lineNumber {
    .line:nth-child(#{$i + 1}) {
        transform: rotateX(#{$i * 10}deg);
        
        
        @for $j from 0 to $column {
            .number:nth-child(#{$j + 1}) {
                // Just remove this line
                animation: reRotate $aniTime linear infinite;
                
                &::before {
                    transform: rotateX(#{$i * -10}deg);
                    content: '#{randomNum(9)}';
                }
            }
        }
    }
}

.container {
    transform: rotateX(0);
    animation: conRotate $aniTime linear infinite;
}

@keyframes conRotate {
    to {
        transform: rotateX(360deg);
    }
}

@keyframes reRotate {
    to {
        transform: rotateX(-360deg);
    }
}

```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-spiral-number" src="https://codepen.io/dvha/embed/wvRxdEg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/wvRxdEg">
  3d-spiral-number</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>