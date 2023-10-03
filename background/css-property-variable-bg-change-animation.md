## Use CSS @property to explore the ultimate effect of gradients

Explore the extreme effects of gradients using CSS @property

### key point

CSS @property is used. If you don’t understand, you can click on this article: [CSS @property, making the impossible possible](https://juejin.cn/post/6951201528543707150)

### Linear gradient

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
}

@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}

body {
    background: repeating-linear-gradient(45deg, deeppink, #fc0, #000, red, green, gray var(--per));
    animation: perChange 60s infinite linear;
    cursor: pointer;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes perChange {
    5% {
        --per: 1%;
    }
    10% {
        --per: .1%;
    }
    30% {
        --per: .01%;
    }
    50% {
        --per: .001%;
    }
    70% {
        --per: .0001%;
    }
    78% {
        --per: .00001%;
    }
    90% {
        --per: .000001%;
    }
    95%,
    100% {
        --per: .0000001%;
    }
}
```

The effect is as follows（Mouseover to pause the animation）：

<iframe height="300" style="width: 100%;" scrolling="no" title="css-property-variable-bg-change-animation" src="https://codepen.io/dvha/embed/eYbjKJG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/eYbjKJG">
  css-property-variable-bg-change-animation</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 径向渐变

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
}

@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}

body {
    background: repeating-radial-gradient(deeppink, #fc0, #000, red, green, gray var(--per));
    animation: perChange 25s infinite linear;
    cursor: pointer;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes perChange {
    5% {
        --per: 1%;
    }
    10% {
        --per: .1%;
    }
    30% {
        --per: .01%;
    }
    50% {
        --per: .001%;
    }
    70% {
        --per: .0001%;
    }
    78% {
        --per: .00001%;
    }
    90% {
        --per: .000001%;
    }
    95%,
    100% {
        --per: .0000001%;
    }
}
```

The effect is as follows（鼠标悬停，可以暂停动画）：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dvha/embed/poqZKbe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/poqZKbe">
  Untitled</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 角向渐变

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
}

@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}

body {
    background: repeating-conic-gradient(deeppink, #fc0, #000, red, green, gray var(--per));
    animation: perChange 25s infinite linear;
    cursor: pointer;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes perChange {
    5% {
        --per: 1%;
    }
    10% {
        --per: .1%;
    }
    30% {
        --per: .01%;
    }
    50% {
        --per: .001%;
    }
    70% {
        --per: .0001%;
    }
    78% {
        --per: .00001%;
    }
    90% {
        --per: .000001%;
    }
    95%,
    100% {
        --per: .0000001%;
    }
}
```

The effect is as follows（鼠标悬停，可以暂停动画）：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dvha/embed/LYMBrZg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/LYMBrZg">
  Untitled</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>