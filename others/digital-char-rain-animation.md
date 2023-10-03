## Dark character rain animation

Dark character rain animation implemented in pure CSS.

### key point

+ Vertical arrangement of text
+ Use CSS to select random strings
+ Use CSS to achieve typing effects
+ Add light, shadow and transparency changes

For detailed information, you can check out this article of mine:

[[Web animation] Dark character rain animation with full sense of technology](https://juejin.cn/post/6991657194282450951)

HTML (Pug template engine is used here):

```pug
// pug template
.g-container
    -for(var i=0; i<50; i++)
        p
```

SCSS：
```scss
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');
$str: 'ぁぃぅぇぉかきくけこんさしすせそた◁▣▤▥▦▧♂♀♥☻►◄▧▨♦ちつってとゐなにぬねのはひふへほゑまみむめもゃゅょゎをァィゥヴェォカヵキクケヶコサシスセソタチツッテトヰンナニヌネノハヒフヘホヱマミムメモャュョヮヲㄅㄉㄓㄚㄞㄢㄦㄆㄊㄍㄐㄔㄗㄧㄛㄟㄣㄇㄋㄎㄑㄕㄘㄨㄜㄠㄤㄈㄏㄒㄖㄙㄩㄝㄡㄥabcdefghigklmnopqrstuvwxyz123456789%@#$<>^&*_+';
$length: str-length($str);
$n: 50;
$animationTime: 4;
$perColumnNums: 25;

@function randomChar() {
    $r: random($length);
    @return str-slice($str, $r, $r);
}

@function randomChars($number) {
    $value: '';

    @if $number > 0 {
        @for $i from 1 through $number {
            $value: $value + randomChar();
        }
    }
    @return $value;
}

body, p {
    margin: 0;
    padding: 0;
}

body, html {
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    overflow: hidden;
}

.g-container {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    font-family: 'Inconsolata', monospace, sans-serif;
}

p {
    position: relative;
    width: 5vh;
    height: 100vh;
    text-align: center;
    font-size: 5vh;
    word-break: break-all;
    white-space: pre-wrap;
    
    &::before,
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        overflow: hidden;
    }
}

@for $i from 0 through $n {
    $content: randomChars($perColumnNums);
    $contentNext: randomChars($perColumnNums);
    $delay: random($n);
    $randomAnimationTine: #{$animationTime + random(20) / 10 - 1}s;
    
    p:nth-child(#{$i})::before {
        content: $content;
        color: rgb(179, 255, 199);
        text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 5px currentColor, 0 0 10px currentColor;
        animation: typing-#{$i} $randomAnimationTine steps(20, end) #{$delay * 0.1s * -1} infinite;
        z-index: 1;
    }

    p:nth-child(#{$i})::after {
        $alpha: random(40) / 100 + 0.6;
        content: '';
        background: linear-gradient(rgba(0, 0, 0, $alpha), rgba(0, 0, 0, $alpha), rgba(0, 0, 0, $alpha), transparent 75%, transparent);
        background-size: 100% 220%;
        background-repeat: no-repeat;
        animation: mask $randomAnimationTine infinite #{($delay - 2) * 0.1s * -1} linear;
        z-index: 2;
    }

    @keyframes typing-#{$i} {
        0% {
            height: 0;
        }
        25% {
            height: 100%;
        }
        100% {
            height: 100%;
            content: $contentNext;
        }
    }
}

@keyframes mask{
    0% {
        background-position: 0 220%;
    } 
    30% {
        background-position: 0 0%;
    }
    100% {
        background-position: 0 0%;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="digital-char-rain-animation" src="https://codepen.io/dvha/embed/LYMJZYK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/LYMJZYK">
  digital-char-rain-animation</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>