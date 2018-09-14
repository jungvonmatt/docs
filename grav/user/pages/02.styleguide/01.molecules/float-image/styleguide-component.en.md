---
title: 'Float Image'
media_order: 'amp-img-01.png,amp-img-02.png'
---

[section name="howToUse"]
In documents you can simply add in a float image by using the `[raw][float-image][/raw]` shortcode together with two default images.
````markdown
[raw]
[float-image]
![](amp-img-01.png)
![](amp-img-02.png)
[/float-image]
[/raw]
```

This shortcode renders the following twig template.
```twig
<div class="ad-o-container">
  <div class="ad-m-float-image col-full">
    {% set staticImage = images.0 %}
    <div class="ad-a-img ad-a-img-static">
      <amp-img src="{{ staticImage.src }}" layout="responsive" width="{{staticImage.width}}" height="{{staticImage.width}}" alt="{{ staticImage.alt}}"></amp-img>
    </div>

    {% set parallaxImage = images.1 %}
    <div class="ad-a-img ad-a-img-shadow-static ad-a-img-parallax">
      {% do assets.addAmpComponent('amp-fx-collection') %}
      <amp-img src="{{ parallaxImage.src }}" layout="fill" width="{{parallaxImage.width}}" height="{{parallaxImage.width}}" alt="{{ parallaxImage.alt}}" amp-fx="parallax"
		  data-parallax-factor="1.1"></amp-img>
    </div>
  </div>
</div>
```
[/section]

[section name="demo"]
The `[raw][float-image][/raw]` shortcode renders something similiar to the following
[float-image]
![](amp-img-01.png)
![](amp-img-02.png)
[/float-image]

Additionally the images inside a `[raw][float-image][/raw]` shortcode can be modified by appending GET paremeters like all other images in Grav CMS as described in the [docs](https://learn.getgrav.org/content/media). For example by appending `?gaussianBlur=5`
[float-image]
![](amp-img-01.png?gaussianBlur=5)
![](amp-img-02.png?gaussianBlur=5)
[/float-image]
[/section]
