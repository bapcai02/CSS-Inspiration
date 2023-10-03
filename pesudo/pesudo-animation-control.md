## Pseudo element checked implements pure CSS method to control animation pause and playback

The pseudo element `:checked` implements pure CSS method to control the pause and playback of animation.

### key point

+ Use the `:checked` pseudo-class of the radio label and add `<label for>` to achieve pure CSS capture of click events
+ Used the `~` selector to control the style

HTML：

```html
<input id="stop" type="radio" name="playAnimation"/>
<input id="play" type="radio" name="playAnimation"/>

<div class="box">
    <label for="stop">
        <div class="btn">stop</div>
    </label>
    <label for="play">
        <div class="btn">play</div>
    </label>
</div>

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

#stop:checked ~ .animation {
    animation-play-state: paused;
}

#play:checked ~ .animation {
    animation-play-state: running;
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-animation-control" src="https://codepen.io/dvha/embed/rNoZLXB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/rNoZLXB">
  pesudo-animation-control</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>