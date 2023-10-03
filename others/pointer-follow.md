## PURE CSS implements mouse following

PURE CSS implements mouse following.

### key point

+ is actually a trick, it is controlled by filling the screen with divs.

For detailed information, you can check out this article of mine:

HTML：

```pug

div.g-container
    -for(var i=0; i<100; i++)
        div.position
    .ball
```

SCSS：
```scss
$count: 100;

.g-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.position {
    position: absolute;
    width: 10vw;
    height: 10vh;
    box-sizing: border-box;
    cursor: pointer;
    // border: 1px solid #eee;
}

@for $i from 0 through $count { 
    
    $x: $i % 10;
    $y: ($i - $x) / 10;
    
    .position:nth-child(#{$i + 1}) {
        top: #{$y * 10}vh;
        left: #{$x * 10}vw;
    }
    
    .position:nth-child(#{$i + 1}):hover ~ .ball {
        top: #{$y * 10 + 5}vh;
        left: #{$x * 10 + 5}vw;
        // transform: translate(-50%, -50%) scale(random(2) + 0.2);
        // 
    }
}

.ball {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10vmax;
    height: 10vmax;
    border-radius: 43%;
    border: 2px solid #333;
    transform: translate(-50%, -50%) rotate(0deg) scale(.8);
    transition: .1s ease-in;
    // transition-delay: .01s;
    animation: rotate 3s infinite ease-in-out alternate;
    z-index: -1;
}

@keyframes rotate {
    100% {
        transform: translate(-50%, -50%) rotate(90deg) scale(1.2);
    }
}
```

The effect is as follows (move the pointer in the picture below to see the effect):

<iframe height="300" style="width: 100%;" scrolling="no" title="pointer-follow" src="https://codepen.io/dvha/embed/oNJPLWX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/oNJPLWX">
  pointer-follow</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>