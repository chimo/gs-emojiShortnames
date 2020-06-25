# Note

I'm done with this. If someone wants to maintain it send me a note and I'll transfer the repo. Or just fork it, or whatever.

# Use emoji shortnames on GNU social

Shortnames: http://emoji.codes/

## Installation from release

Download the [latest release](https://github.com/chimo/gs-emojiShortnames/releases) and extract it in your `/plugins/` or `/local/plugins/` directory.

Tell `/config.php` to use it with the following:
```php
addPlugin('EmojiShortnames');
```

## Installation from git

1. Navigate to your `/plugins/` or `/local/plugins` directory
1. `git clone https://github.com/chimo/gs-emojiShortnames.git EmojiShortnames`
1. `cd EmojiShortnames`
1. `composer install`
1. `npm install`

Tell `/config.php` to use it with the following:
```php
addPlugin('EmojiShortnames');
```

## Usage

When posting a notice, shortnames will be converted to emojis.  

Example:  
From this: `I like my coffee black, just like my metal :coffee:`  
To this: `I like my coffee black, just like my metal 🍮`
