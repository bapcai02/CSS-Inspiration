## Pseudo element focus-within pure CSS method to achieve Nuggets landing special effects

Pseudo element `:focus-within` implements the Nuggets landing special effect in pure CSS.

![](https://user-images.githubusercontent.com/8554143/43560900-2ef72358-9647-11e8-8123-ecfc45828c3d.gif)

`:focus-within` Pseudo-class selector, which indicates that an element obtains focus, or that a descendant element of this element obtains focus. Highlight it and **it or its descendants gain focus**.

This means that `:focus-within` can be triggered if **it or its descendants receive focus**.

HTML:

```html
<div class="g-container">
     <h2>Login</h2>
     <div class="g-username">
         <input name="loginPhoneOrEmail" maxlength="64" placeholder="Please enter your mobile phone number or email" class="input">
         <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="g-username">
     </div>

     <div class="g-password">
         <input name="loginPassword" type="password" maxlength="64" placeholder="Please enter password" class="input">
         <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="g-password">
     </div>

     <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" class="g-normal">
</div>
```

SCSS：
```scss
$bg-normal: 'https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png';
$bg-username: 'https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png';
$bg-password: 'https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png';

.g-container {
    position: relative;
    width: 318px;
    margin: 100px auto;
    height: 370px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    z-index: 10;
    
    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    
    input {
        outline: none;
        padding: 10px;
        width: 100%;
        border: 1px solid #e9e9e9;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
        font-size: 16px;
    }
}

img {
    position: absolute;
    top: -20%;
    left: 50%;
    width: 120px;
    height: 95px;
    transform: translate(-50%, 0);
}

.g-username {
    margin-bottom: 10px;
    
    img {
        display: none;
        width: 120px;
        height: 113px;
    }
}

.g-username:focus-within ~ img {
    display: none;
}

.g-username:focus-within {   
    input {
        border-color: #007fff;
    }
    img {
        display: block;
    }
}

.g-password {
    margin-bottom: 10px;
    
    img {
        display: none;
        width: 103px;
        height: 84px;
        top: -15%;
    }
}

.g-password:focus-within ~ img {
    display: none;
}

.g-password:focus-within {   
    input {
        border-color: #007fff;
    }
    img {
        display: block;
    }
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-juejin" src="https://codepen.io/dvha/embed/ZEVMpGz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/ZEVMpGz">
  pesudo-juejin</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>