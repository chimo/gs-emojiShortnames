# Use emoji shortnames on GNU social

Shortnames: http://emoji.codes/

## Installation

These instructions assume you have [composer](http://getcomposer.org/) installed.  

Make sure the files are in a folder called `EmojiShortnames` if they're not already  
Put the folder in your `/plugins/` directory  
Run `composer require emojione/emojione` in the `/plugins/EmojiShortnames/` directory  
Tell `/config.php` to use it with the following:
```php
addPlugin('EmojiShortnames');
```

## Usage

When posting a notice, shortnames will be converted to emojis.  

Example:  
From this: `I like my coffee black, just like my metal :coffee:`  
To this: `I like my coffee black, just like my metal 🍮`

