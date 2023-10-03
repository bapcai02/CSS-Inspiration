## Linear gradient to realize underline

Use a linear gradient to achieve underlining. Compared with traditional underlines, gradient underlines have more controllability.

+ Controllable distance between underline and bottom
+ Controllable underline thickness
+ Controllable underline color
+ Can add animations & gradients

HTML：

```html
<hgroup class="underline">
    <h1 class="underline1-ajkps">.underline1-ajkpys</h1>
    <h1 class="underline2-ajkps">.underline2-ajkpys</h1>
    <h1 class="underline3-ajkps">.underline3-ajkpys</h1>
</hgroup>
```

SCSS：
```scss
.underline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    text-align: center;
    color: white;
    font-size: 200%;
    background: #00aabb;
    border-radius: 0.5em;
}

.underline1-ajkps,
.underline2-ajkps,
.underline3-ajkps {
    height: 100px;
    cursor: pointer;
    position: absolute;
    left: 16%;
    text-shadow: 0.1em 0 #00aabb, -0.1em 0 #00aabb;
    transition: 1s;
}

.underline1-ajkps {
    top: 10%;
    background: linear-gradient(white, white) no-repeat;
    background-size: 100% 1px;
    background-position: -10em 1.15em;
}

.underline1-ajkps:hover {
    background-position: 0 1.15em;
}

.underline2-ajkps {
    top: 38%;
    background: linear-gradient(90deg, white 50%, transparent 0) repeat-x;
    background-size: 0.2em 2px;
    background-position: -3em 1.15em;
}

.underline2-ajkps:hover {
    background-position: 0 1.15em;
}

.underline3-ajkps {
    top: 66%;
    background: 
        linear-gradient(-45deg, transparent 40%, white 0, white 60%, transparent 0) 0 1em,
        linear-gradient(45deg, transparent 40%, white 0, white 60%, transparent 0) 0.1em 1em;
    background-repeat: repeat-x;
    background-size: 0.15em 0.1em;
    background-position: -3em 1.15em;
}
.underline3-ajkps:hover {
    background: linear-gradient(-45deg, transparent 40%, deeppink 0, deeppink 60%, transparent 0) 0 1em,
        linear-gradient(45deg, transparent 40%, deeppink 0, deeppink 60%, transparent 0) 0.1em 1em;
    background-repeat: repeat-x;
    background-size: 0.15em 0.1em;
    background-position: 0 1.15em;
}

```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-underline" src="https://codepen.io/dvha/embed/VwqBxOE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/VwqBxOE">
  bg-linear-underline</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>