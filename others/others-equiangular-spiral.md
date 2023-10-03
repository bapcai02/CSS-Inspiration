## Congruent spiral

Equiangular spiral.

The equiangular spiral is a very interesting geometric figure.

The distance between the arms of an equiangular spiral increases geometrically. Conformal spirals are self-similar; that is, they look exactly like the original image when enlarged. The involute and vertical curve of an equiangular spiral are both equiangular spirals. The length from the origin to any point on the equiangular spiral is finite, but starting from that point and walking along the equiangular spiral to the origin requires infinite turns around the origin.

### key point

1. With the help of trigonometric functions, CSS itself does not have trigonometric functions, so SCSS needs to be used to implement trigonometric function methods (Sin, Cos)
2. SCSS implements trigonometric functions with the help of Taylor's formula. For details, you can read my article: [Using trigonometric functions in CSS to draw curve graphics and display animations]

Pug template (HTMLtemplate engine):

```pug
- for(var i=0; i<32; i++)
    .box
```

SCSS：
```scss
// scss sin、cos、tan
$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
    $value: $base;
    @if $exp > 1 {
        @for $i from 2 through $exp {
            $value: $value * $base;
        }
    }
    @if $exp < 1 {
        @for $i from 0 through -$exp {
            $value: $value / $base;
        }
    }
    @return $value;
}

@function fact($num) {
    $fact: 1;
    @if $num > 0 {
        @for $i from 1 through $num {
            $fact: $fact * $i;
        }
    }
    @return $fact;
}

@function _to_unitless_rad($angle) {
    @if unit($angle) == "deg" {
        $angle: $angle / 180deg * $pi;
    }
    @if unit($angle) == "rad" {
        $angle: $angle / 1rad;
    }
    @return $angle;
}

@function sin($angle) {
    $a: _to_unitless_rad($angle);
    $sin: $a;
    @for $n from 1 through $_precision {
        $sin: $sin + (pow(-1, $n) / fact(2 * $n + 1)) * pow($a, (2 * $n + 1));
    }
    @return $sin;
}

@function cos($angle) {
    $a: _to_unitless_rad($angle);
    $cos: 1;
    @for $n from 1 through $_precision {
        $cos: $cos + (pow(-1, $n) / fact(2 * $n)) * pow($a, 2 * $n);
    }
    @return $cos;
}

@function tan($angle) {
    @return sin($angle) / cos($angle);
}

$squares: 32;
$angle: $pi / ($squares - 1);
$ratio: 1 / (sin($angle) + cos($angle));
$size: 100;

div {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 2px black solid;
    @for $i from 0 through $squares {
        &:nth-child(#{$i}) {
            $s: pow($ratio, $i) * $size;
            width: #{$s}vmin;
            height: #{$s}vmin;
            transform: translate(-50%, -50%) rotate(#{$angle}rad);
        }
        $angle: $i * $pi / ($squares - 1);
    }
}
```

The effect is as follows:

<iframe height="300" style="width: 100%;" scrolling="no" title="others-equiangular-spiral" src="https://codepen.io/dvha/embed/xxmaOwe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/xxmaOwe">
  others-equiangular-spiral</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

----

Of course, you can add color:

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dvha/embed/KKbxMVQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/KKbxMVQ">
  Untitled</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Or add animation:

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dvha/embed/mdaGEEE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/mdaGEEE">
  Untitled</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>