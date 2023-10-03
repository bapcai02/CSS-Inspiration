## Pseudo element target implements pure CSS method to control animation pause and playback

The pseudo element `:target` implements pure CSS method to control the pause and playback of animation.

### key point

+ How to receive click events: The most important core of this example is to use the `:target` pseudo-class to receive click events
+ How to operate related DOM: control style through sibling selector `~`

### related articles

[Pure CSS navigation bar Tab switching solution](http://www.cnblogs.com/coco1s/p/5955631.html)
HTML：

```html
<div id="stop"></div>
<div id="play"></div>

<div class="box">
    <a class="btn" href="#stop">stop</a>
    <a class="btn" href="#play">play</a>
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
    display: block;
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border:1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    text-decoration: none;
    
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    &:hover {
        background: #ddd;
        color: #333;
    }
    
    &:active {
        background: #aaa;
    }
}

#stop:target ~ .animation {
    animation-play-state: paused;
}

#play:target ~ .animation {
    animation-play-state: running;
}
```
The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-animation-control-target" src="https://codepen.io/dvha/embed/ZEVMOVN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/ZEVMOVN">
  pesudo-animation-control-target</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>