## CSS text splitting effect

CSS text splitting effect.

### key point

+ Use multiple containers to gradually divide the text
+ Combined with filters `blur` and `contrast`


HTML:

```pug
// pug template
div.g-container
     -for(var i=0; i<11; i++)
         .g-view
             .g-textMAGICCSS
```

SCSS：
```scss
$count: 11;

html,
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.g-container {
    position: relative;
    margin: 20vh auto;
    width: 33vw;
    height: 10vw;
    filter: blur(0.2vw) contrast(8);
}

.g-view {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    position: absolute;
    overflow: hidden;
    font-size: 6vw;
    height: 10vw;
}

.g-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 33vw;
    text-align: center;
}

@for $i from 0 through $count {  
    .g-view:nth-child(#{$i}) {
        width: #{$i * 3}vw;
        animation: rotate 1.5s ease-in #{$i * 140}ms;
        z-index: 10 - $i;
        
        &::before {
            $j: $i - 1;
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: #{$j * 3}vw;
            height: 10vw;
            background: #fff;
            z-index: 1;
        }
    }    
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) scaleX(1);
    }
    50% {
        transform: translate(-50%, -50%) rotate(180deg) scaleX(0.1);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) scaleX(1);
    }
}
```

The effect is as follows (rerun in the lower right corner can play the animation repeatedly):

<iframe height="300" style="width: 100%;" scrolling="no" title="word-break" src="https://codepen.io/dvha/embed/YzdOWEW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/YzdOWEW">
  word-break</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>