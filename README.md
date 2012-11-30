Sticky Menu
==========

Sticky Menu is a super lightweight jQuery plugin to make a menu sticky/docked/pinned to the page when you scroll down.

I put together this plugin because I couldn't quickly find a small plugin to do this. I found plenty of larger ones which were more generalized, but were considerably larger and that seemed unnecessary for my purpose. Hopefully this will be useful to someone.

Currently, it only realistically supports one menu since it has the positioning hard coded within the plugin. It also does not have a function to unbind/reset. This was a choice on my part to keep it as small as possible.

Upon request, I can add these features!

## Quick start

Clone the git repo - `git clone git@github.com:gneatgeek/stickymenu.git` - or [download the current tag](https://github.com/gneatgeek/stickymenu/archive/v1.0.1-stable.zip)

## Demo and Example Usage
To see this plugin in action, checkout [gneatgeek.github.com](http://gneatgeek.github.com)

To use it, chain it to a jQuery element:
```javascript
$('#menu').stickyMenu();
```
It is monad friendly, so feel free to chain functions before and after this one.

## Features

Right now, to keep the plugin small, I've only added code that allows you to change the default css class name (sticky) it will append to your menu.  Simply pass an alternate css class name into the function to override it.

Use the css class it appends to alter the appearance of your menu, such as opacity, if you so desire.
