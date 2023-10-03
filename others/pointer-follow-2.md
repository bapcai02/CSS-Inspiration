## PURE CSS implements mouse following 2

PURE CSS implements mouse following 2.

### key point

+ Blind method, control the mouse to follow by covering the screen with divs
+ Change the transparency of elements through hover and transition


HTML：

```pug

.bg hover me
.container
    - for(var i=0; i<500; i++)
        .box
```

SCSS：
```scss
$count: 500;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
    text-align: center;
    font-size: 15vw;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgba(118, 218, 255, .8);
    z-index: -1;
}

.container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    cursor: pointer;
    z-index: 100;
    
    .box {
        position: relative;
        float: left;
        width: 30px;
        height: 30px;
        margin: 4px;
        // mix-blend-mode: multiply;    
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;  
            transform: scale3d(0.1, 0.1, 1);
            background-color: transparent;
            transition: .5s transform ease-in,
                        .5s background ease-in;
        }
    }
    
    .box:hover {
        &::before {
            transform: scale3d(1.8, 1.8, 1.8);
            transition: 0s transform;
        }
    }
}

@for $i from 1 through $count {   
    .box:nth-child(#{$i}):hover {
        &::before {
            background-color: rgba(randomNum(255), randomNum(255), randomNum(255), .8);
        }
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="pointer-follow-2" src="https://codepen.io/dvha/embed/JjwaKbg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/JjwaKbg">
  pointer-follow-2</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>