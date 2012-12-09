Sticky Menu
==========

Sticky Menu is a super small jQuery plugin to make a menu sticky/docked/pinned to the page when you scroll down.

I put together this plugin because I couldn't quickly find a small plugin to do this. I found plenty of larger ones which were more generalized, but they were considerably larger and that seemed unnecessary for my purpose. Hopefully this will be useful to someone.

Currently, it does not have a function to unbind/reset. This was a choice on my part to keep it as small as possible. I can add this feature upon request.

## Quick start

Clone the git repo - `git clone git@github.com:gneatgeek/stickymenu.git` - or [download the current tag](https://github.com/gneatgeek/stickymenu/archive/v1.0.1-stable.zip)

## Demo and Example Usage
To see this plugin in action, check out [gneatgeek.github.com](http://gneatgeek.github.com)

To use it, chain it to a jQuery element:
```javascript
$('#menu').stickyMenu();
```

You will also minimally need to add a css class for your menu. Sticky Menu uses .sticky by default as its class name but that can be overriden as desired. Below is the minimally required CSS (set the z-index accordingly to keep the menu above everything else).

```css
.sticky {
  position   : fixed;
  top        : 0;
  z-index    : 100;
}
```

Sticky Menu will work with the menu using static positioning on the page, but I've found it works better if done with absolute. It will switch to fixed to make the menu sticky. Opacity is a great thing to add to your menu once it becomes sticky.

## Features

Right now, to keep the plugin small, I've only added code that allows you to change the default css class name (sticky) it will append to your menu.  Simply pass an alternate css class name into the function to override it.

Use the css class it appends to alter the appearance of your menu, such as opacity, if you so desire.

It is monad friendly, so feel free to chain functions before and after this one.

## Warnings
In some rare cases this plugin may make scrolling slightly jittery. This was observed on 32 bit Windows XP with no hardware acceleration.

If your menu is at the very top of your page, you should simply use the CSS fixed property to keep it at the top. There is overhead caused by this plugin, which typically isn't an issue, but why add it if you don't need it? Sticky Menu is great when you have to scroll down to the menu then make it sticky.
