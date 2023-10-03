## Positive and negative rotation destructive animation

Positive and negative rotation destructive animation.

### key point

Two containers are used to rotate towards each other. For some specific details, you can read my article:

[CSS animation techniques and details you don’t know](https://www.cnblogs.com/coco1s/p/7443263.html)

HTML：

```html
<div class="reverseRotate">
    <div class="rotate">
        <div class="content">Positive and negative rotation destructive 3D animation</div>
    </div>
</div>
```

SCSS：
```scss

div {
    transform-style: preserve-3d;
    perspective: 500px;
}

.reverseRotate {
    margin: 20vh auto;
}

.rotate,
.reverseRotate {
    width: 50vh;
    height: 50vh;
}

.content {
    width: 100%;
    height: 100%;
    line-height: 50vh;
    text-align: center;
    background-color: rgba(255, 100, 100, .8);
    font-size: 5vh;
    color: #fff;
    box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, .6);
}

.rotate {
    animation: rotate 5s linear infinite; 
}

.reverseRotate {
    animation: reverseRotate 5s linear infinite; 
}

@keyframes rotate {
    0% {
        transform: rotateX(0deg) rotateZ(0deg);
    }
    50% {
        transform: rotateX(40deg) rotateZ(180deg);
    }
    100% {
        transform: rotateX(0deg) rotateZ(360deg);
    }
}

@keyframes reverseRotate {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(-360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-rotate" src="https://codepen.io/dvha/embed/BavPRvp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/BavPRvp">
  animation-rotate</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>