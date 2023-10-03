## TikTok-like LOGO dizzy effect of the picture

Use background-blend-mode | mix-blend-mode to achieve a dizzy effect similar to Douyin LOGO.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.

### mix-blend-mode

In addition to `mix-blend-mode`, CSS also provides a `background-blend-mode`. That is the blending mode of the background.

+ It can be a mixture of background images and background images,
+ Can also be a mix between background image and background color.

### key point

In this example, `background-blend-mode` | `mix-blend-mode` is used together.

HTML：

```html
<div class="mix3d"></div>
```

SCSS：
```scss
.mix3d {
    margin: 30px auto 0;
    width: 400px;
    height: 400px;
    z-index: 2;
    background: url('https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000'), cyan;
    background-blend-mode: lighten;
    background-size: center;

  &:after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    z-index: 3;
    background: url('https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000'), red;
    background-blend-mode: lighten;
    margin-left: 10px;
    background-size: center;
    mix-blend-mode: darken;
  }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-mix-img" src="https://codepen.io/dvha/embed/bGOjKWe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/bGOjKWe">
  blend-mix-img</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>