## CSS text split movement effect

CSS text splitting movement effect.

### key point

+ Use multiple containers to gradually divide the text
+ Combined with filters `blur` and `contrast`


HTML：

```pug

div.g-container
    -for(var i=0; i<10; i++)
        .g-view 
            .g-text MAGICSS 
```

SCSS：
```scss
$count: 10;

html,
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #000;
}

.g-container {
    position: relative;
    margin: 20vh auto;
    width: 33vw;
    height: 10vw;
    filter: blur(0.2vw) contrast(20);
}

.g-view {
    top: 0;
    left: 0;
    // transform: translate(-50%, -50%) rotate(0deg) scale(1);
    position: absolute;
    overflow: hidden;
    font-size: 6vw;
    height: 10vw;
    background: #000;
    mix-blend-mode: screen;
}

.g-text {
    top: 0;
    left: 0;
    position: absolute;
    width: 33vw;
    color: #fff;
    // text-align: center;
}

@for $i from 0 through $count {  
    .g-view:nth-child(#{$i}) {
        width: #{$i * 3}vw;
        animation: rotate 2s ease-in-out #{$i * 80}ms forwards;
        z-index: 10 - $i;
        
        $j: $i - 1;
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: #{$j * 3}vw;
            height: 10vw;
            background: #000;
            z-index: 1;
        }
    }    
}

@keyframes rotate {
    0% {
        transform: translate(0) rotate(0deg) scaleX(1) skewX(0) skewY(0);
    }
    50% {
        transform: translate(40vw, 20vh) rotate(-180deg) scaleX(1.5) skewX(40deg) skewY(-20deg);
    }
    100% {
        transform: translate(0vw) rotate(-360deg) scaleX(1) skewX(0) skewY(0);
    }
}


@keyframes move {
    100% {
        transform: translate(0, 4vw);
    }
}
```
The effect is as follow：

<iframe height="300" style="width: 100%;" scrolling="no" title="word-break-move" src="https://codepen.io/dvha/embed/mdaGEMO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/mdaGEMO">
  word-break-move</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>