## Gradient implements wavy underline

Use gradients to achieve wavy underlines.

### Core Points

+ The first point is how to seamlessly connect two sections of `radial-gradient` to form a wave

+ The second key point is how to connect the animation progress from beginning to end.

HTML:

```html
<p>Gradient to achieve waves</p>
<a class="flow-wave">Hover Me</a>
```

SCSS：
```scss
p {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%) scale(3);
    font-size: 18px;
    text-decoration: none;
    padding: 10px;
    cursor:pointer;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 10px -7px, transparent 8px, red 8px, red 9px, transparent 9px) repeat-x;
        background-size: 20px 20px;
        background-position: -10px calc(100% + 16px); 
        
    }
    
    &:hover::before {
        animation: moveTop 2s infinite alternate linear;
    }
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 10px 27px, transparent 8px, green 8px, green 9px, transparent 9px) repeat-x;
        background-size: 20px 20px;
        background-position: 0 calc(100% - 4px); 
    }
    
    &:hover::after {
        animation: moveBottom 2s infinite alternate linear;
    }
}

.flow-wave {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%) scale(3);
    font-size: 18px;
    text-decoration: none;
    
    background: radial-gradient(circle at 10px -7px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x,
        radial-gradient(circle at 10px 27px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
}

.flow-wave {
    padding: 5px 0;
}
.flow-wave:hover,
.flow-wave:focus {
    background: radial-gradient(circle at 10px -7px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x,
        radial-gradient(circle at 10px 27px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
    animation: waveFlow 1s infinite linear;
}

@keyframes waveFlow {
    from { background-position-x: -10px, 0; }
    to { background-position-x: -30px, -20px; }
}

@keyframes moveTop {
    100% {
        bottom: -5px;
    }
}

@keyframes moveBottom {
    100% {
        bottom: 5px;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-wave-underline" src="https://codepen.io/dvha/embed/MWZBXam?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/MWZBXam">
  bg-wave-underline</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>