## Use mix-blend-mode to implement Douyin LOGO

Use mix-blend-mode to implement Douyin LOGO.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### key point

+ Mainly achieved the overall J structure with the help of pseudo-elements, and achieved the fusion effect with the help of mix-blend-mode
+ Use the `mix-blend-mode: lighten` mixing mode to make the overlapping part of the two J-shaped structures white

HTML：

```html
<div class="g-container">
    <div class="j"></div>
    <div class="j"></div>
</div>
```

SCSS：
```scss
body {
    background: #000;
    overflow: hidden;
}

.g-container {
    position: relative;
    width: 200px;
    margin: 100px auto;
    filter: contrast(150%) brightness(110%);
}

.j {
    position: absolute;
    top: 0;
    left: 0;
    width: 47px;
    height: 218px;
    z-index: 1;
    background: #24f6f0;

    &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border: 47px solid #24f6f0;
        border-top: 47px solid transparent;
        border-radius: 50%;
        top: 121px;
        left: -147px;
        transform: rotate(45deg);
    }
    
        &::after {
        content: "";
        position: absolute;
        width: 140px;
        height: 140px;
        border: 40px solid #24f6f0;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
        top: -110px;
        right: -183px;
        border-radius: 100%;
        transform: rotate(45deg);
        z-index: -10;
    }
}

.j:last-child {
    left: 10px;
    top: 10px;
    background: #fe2d52;
    z-index: 100;
    mix-blend-mode: lighten;
    animation: moveLeft 10s infinite;
    
    &::before {
        border: 47px solid #fe2d52;
        border-top: 47px solid transparent;

    }
    &::after {
        border: 40px solid #fe2d52;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
    }
}

@keyframes moveLeft {
    0% {
        transform: translate(200px);
    }
    50% {
        transform: translate(0px);
    }
    100% {
        transform: translate(0px);
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-douyin-logo" src="https://codepen.io/dvha/embed/QWzBxdG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/QWzBxdG">
  blend-douyin-logo</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>