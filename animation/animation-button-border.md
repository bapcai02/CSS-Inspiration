## Use transition-delay to achieve button border animation effect

Use `transition-delay` to achieve the animation effect when the button border hovers.


### key point

+ Properly set `transition-delay` for the border on each side of the container, which can delay the occurrence of animation and then piece it together coherently to achieve some effects.

HTML：

```html
<div class="both">Both</div>
<div class="rectangle">Rectangle</div>
<div class="circle">Circle</div>
```

SCSS：
```scss
body {
    background: #000;
}

div {
    position: relative;
    width: 200px;
    height: 64px;
    line-height: 64px;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    transition: color 1s;
}

div::before,
div::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    // transition: width .5s, height .5s;
    // transition-delay: .5s, 0s;
    border: 3px solid transparent;
}

.both:hover {
    color: #00e2ff;
    
    &::before {
        transition: width .5s, height .5s, border-bottom-color 0s;
        transition-delay: .5s, 0s, .5s;
        width: 200px;
        height: 64px;
        border-left: 3px solid #00e2ff;
        border-bottom: 3px solid #00e2ff;
    }
    
    &::after {
        transition: width .5s, height .5s, border-right-color .5s;
        transition-delay: 0s, .5s, .5s;
        width: 200px;
        height: 64px;
        border-top: 3px solid #00e2ff;
        border-right: 3px solid #00e2ff;
    }
}

.rectangle {
    &::after {
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
    }
    
    &:hover {
        color: #00e2ff;
        
        &::before {
            transition: width .25s, height .25s, border-bottom-color 0s;
            transition-delay: .25s, 0s, .25s;
            width: 200px;
            height: 64px;
            border-left: 3px solid #00e2ff;
            border-bottom: 3px solid #00e2ff;
        }

        &::after {
            transition: width .25s, height .25s, border-top-color .25s;
            transition-delay: 0.75s, 0.5s, 0.75s;
            width: 200px;
            height: 64px;
            border-top: 3px solid #00e2ff;
            border-right: 3px solid #00e2ff;
        }
    }   
}

.circle {
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    
    &::before,
    &::after{
        border-radius: 50%; 
    }
    
    &:hover {
        color: #00e2ff;
        
        &::before {
            width: 120px;
            height: 120px;
            border-color: #00e2ff;
            transition: border-top-color .25s linear,
                        border-right-color .25s linear,
                        border-bottom-color .25s linear,
                        border-left-color .25s linear;
            transition-delay: 0s, .25s, .5s, .75s;
        }
        
        &::after {
            width: 120px;
            height: 120px;
            border-top: 3px solid #00e2ff;
            transform: rotate(270deg);
            transition: transform .75s linear;
            transition-delay: 0s;
        }
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-button-border" src="https://codepen.io/dvha/embed/poqZPxa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/poqZPxa">
  animation-button-border</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>