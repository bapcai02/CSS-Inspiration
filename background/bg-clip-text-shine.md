## background-clip implements streamer text effect

Use `background-clip: text` to achieve streamer text effect.

### key point

There is an attribute in the background called background-clip, which is used to set the filling rules of the element's background (background image or color).

It is very similar to the value of box-sizing. Generally speaking, it has three values, border-box, padding-box, and content-box. The following specifications add a new background-clip. To this day, some browsers still need to add the prefix webkit to use -webkit-background-clip.

Using this attribute means that the text within the block is used as the cropping area to be cropped outward. The background of the text is the background of the block, and the area outside the text will be cropped.


HTML：

```html
<p data-text="Lorem ipsum dolor"> Lorem ipsum dolor </p>
```

SCSS：
```scss
html, body {
    width: 100%;
    height: 100%;
    background-image: radial-gradient(ellipse farthest-side at 40% 0%, #455A64 0%, #263238 60%, #1a2327 100%);
    display: flex;
}

p {
    position: relative;
    margin: auto;
    font-size: 5rem;
    word-spacing: 0.2em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    color: transparent;
    background-color: #E8A95B;
    background-clip: text;
}

p::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: linear-gradient(120deg, transparent 0%, transparent 6rem, white 11rem, transparent 11.15rem, transparent 15rem, rgba(255, 255, 255, 0.3) 20rem, transparent 25rem, transparent 27rem, rgba(255, 255, 255, 0.6) 32rem, white 33rem, rgba(255, 255, 255, 0.3) 33.15rem, transparent 38rem, transparent 40rem, rgba(255, 255, 255, 0.3) 45rem, transparent 50rem, transparent 100%);
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 5s infinite linear;
}

@keyframes shine {
	0% {
		background-position: 50% 0;
	}
	100% {
		background-position: -190% 0;
	}
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-clip-text-shine" src="https://codepen.io/dvha/embed/vYvajxj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/vYvajxj">
  bg-clip-text-shine</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>