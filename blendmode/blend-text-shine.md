## Use mix-blend-mode to achieve light and shadow text effects

Use mix-blend-mode to achieve light and shadow text effects.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### key point

+ Use the blending mode `mix-blend-mode: multiply` to generate gradient text.
+ Use the `mix-blend-mode: color-dodge` mixing mode to add embellishments to text to achieve wonderful light and shadow effects

HTML：

```html
<div class="g-container">
    <p>Magic Text</p>
</div>
```

SCSS：
```scss

.g-container {
    margin: auto;
}

p {
    position: relative;
    font-size: 12vw;
    line-height: 16vw;
    // color: #9a9acc;
    overflow: hidden;
    -webkit-text-stroke: 3px #7272a5;

    &::before {
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
        mix-blend-mode: multiply;
    }

    &::after {
        content: "";
        background: radial-gradient(circle, #fff, #000 50%);
        background-size: 25% 25%;
        position: absolute;
        top: -100%;
        left: -100%;
        right: 0;
        bottom: 0;
        mix-blend-mode: color-dodge;
        animation: mix 8s linear infinite;
    }
}

@keyframes mix {
    to {
        transform: translate(50%, 50%);
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-text-shine" src="https://codepen.io/dvha/embed/BavPVrz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/BavPVrz">
  blend-text-shine</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>