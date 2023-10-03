## Pseudo element hover implements pure CSS method to control animation pause and playback

The pseudo element `:hover` implements pure CSS method to control the pause and playback of animation.

### key point

+ Use the hover pseudo-class to control the pause of the animation style when the mouse hovers over the button.
+ Used the `~` selector to control the style

### related articles

HTML：

```html
<div class="btn stop">stop</div>
<div class="animation"></div>
```

SCSS：
```scss
.animation {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    background: deeppink;
    animation: move 2s linear infinite alternate;
}

input {
    display: none;
}

@keyframes move {
    0% {
        transform: translate(-100px, 0);
    }
    100% {
        transform: translate(100px, 0);
    }
}

.btn {
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border:1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    
    &:hover {
        background: #ddd;
        color: #333;
    }
    
    &:active {
        background: #aaa;
    }
}

.stop:hover ~ .animation {
    animation-play-state: paused;
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-animation-control-hover" src="https://codepen.io/dvha/embed/vYvzKvx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/vYvzKvx">
  pesudo-animation-control-hover</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>