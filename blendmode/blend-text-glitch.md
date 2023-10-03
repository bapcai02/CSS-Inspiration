## Similar to Douyin LOGO text glitch effect

Use mix-blend-mode to achieve a Tiktok-like LOGO text glitch effect.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### key point

+ Use the `mix-blend-mode: lighten` mixing mode to make the overlapping parts of the two text structures white
+ Use element displacement to complete misaligned movement animation to create a visual impact.

HTML：

```html
<div class="text-magic" data-word="CSSTextGlitch">
    <div class="white"></div>
</div>
```

SCSS：
```scss
.text-magic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(3);
    width: 300px;
    font-size: 36px;
    font-family: Raleway, Verdana, Arial;
    color: transparent;
}
.white {
    position: absolute;
    left: -10px;
    width: 100%;
    height: 1px;
    background: #000;
    z-index: 4;
    animation: whiteMove 10s ease-out infinite;
}

.text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    color: red;
    overflow: hidden;
    z-index: 2;
    filter: contrast(200%);
    text-shadow: 1px 0 0 red;
    animation: move 0.95s infinite;
}

.text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -1px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    color: cyan;
    filter: contrast(200%);
    text-shadow: -1px 0 0 cyan;
    mix-blend-mode: lighten;
    animation: move 1.1s infinite 0.2s;
}

@keyframes whiteMove {
    9% {
        top: 38px;
    }
    14% {
        top: 8px;
    }
    18% {
        top: 42px;
    }
    22% {
        top: 1px;
    }
    32% {
        top: 32px;
    }
    34% {
        top: 12px;
    }
    40% {
        top: 26px;
    }
    43% {
        top: 7px;
    }
    99% {
        top: 30px;
    }
}

@keyframes move {
    10% {
        top: -0.4px;
        left: -1.1px;
    }
    20% {
        top: 0.4px;
        left: -0.2px;
    }
    30% {
        left: .5px;
    }
    40% {
        top: -0.3px;
        left: -0.7px;
    }
    50% {
        left: 0.2px;
    }
    60% {
        top: 1.8px;
        left: -1.2px;
    }
    70% {
        top: -1px;
        left: 0.1px;
    }
    80% {
        top: -0.4px;
        left: -0.9px;
    }
    90% {
        left: 1.2px;
    }
    100% {
        left: -1.2px;
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-text-glitch" src="https://codepen.io/dvha/embed/KKbBeZq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/KKbBeZq">
  blend-text-glitch</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>