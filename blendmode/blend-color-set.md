## Use mix-blend-mode to implement arbitrary color assignment technology for images

Use `mix-blend-mode` to implement arbitrary color assignment technology for images.

CSS3 has added a very interesting attribute - `mix-blend-mode`. The Chinese free translations of mix and blend are both mixed, so the literal translation of this attribute is mixed blend mode. Of course, we usually call it Blend mode.

Blending modes are most commonly found in photoshop and are one of the most powerful features in PS. Of course, everyone can use blending modes indiscriminately. Use blending modes to mix multiple layers to get a new effect. You just need to use it just right. In other words, using blending modes in CSS to create some effects requires a deep understanding of blending modes. understanding and continuous attempts.


### key point

For detailed analysis, please see: [Two lines of CSS code to achieve arbitrary coloring of images](https://www.cnblogs.com/coco1s/p/8080211.html)
HTML：

```html
<div class="pic">Original image</div>
<div class="pic pic1">Red</div>
<div class="pic pic2">grey</div>
<div class="pic pic3">Gradient color</div>
```

SCSS：
```scss
$img: 'https://user-images.githubusercontent.com/8554143/34239266-232bdfc0-e641-11e7-8792-408782aaa78e.png';

.pic {
    width: 200px;
    height: 200px;
    margin: 50px;
    text-align: center;
    font-size: 42px;
    line-height: 420px;
    float: left;
    background-image: url($img);
    background-size: cover;
}

.pic1 {
    background-image: url($img), linear-gradient(#f00, #f00);
    background-blend-mode: lighten;
    background-size: cover;
}

.pic2 {
    background-image: url($img), linear-gradient(#333, #333);
    background-blend-mode: lighten;
    background-size: cover;
}

.pic3 {
    background-image: url($img), linear-gradient(#f00, #00f);
    background-blend-mode: lighten;
    background-size: cover;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="blend-color-set" src="https://codepen.io/dvha/embed/VwqBdmR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/VwqBdmR">
  blend-color-set</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>