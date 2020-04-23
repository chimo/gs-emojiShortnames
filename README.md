# Use emoji shortnames on GNU social

Shortnames: http://emoji.codes/

## Installation from release

Download the [latest "nightly" release](https://github.com/chimo/gs-emojiShortnames/releases) and extract it in your `/plugins/` or `/local/plugins/` directory.

Copy the "css", "js" and "extlibs" folders where GNU social serves them.  
Starting in the GNU social installation directory:
```
mkdir public/plugins/EmojiShortnames
cd local/plugins/EmojiShortnames
cp -r css js extlibs ../../../public/plugins/EmojiShortnames/
```

Tell `/config.php` to use it with the following:
```php
addPlugin('EmojiShortnames');
```

## Installation from git

1. Navigate to your `/plugins/` or `/local/plugins` directory
1. `git clone https://github.com/chimo/gs-emojiShortnames.git EmojiShortnames`
1. `cd EmojiShortnames`
1. `git checkout nightly`
1. `composer install`
1. `npm install`

Copy the "css", "js" and "extlibs" folders where GNU social serves them.  
Starting in the GNU social installation directory:
```
mkdir public/plugins/EmojiShortnames
cd local/plugins/EmojiShortnames
cp -r css js extlibs ../../../public/plugins/EmojiShortnames/
```

Tell `/config.php` to use it with the following:
```php
addPlugin('EmojiShortnames');
```

## Usage

When posting a notice, shortnames will be converted to emojis.  

Example:  
From this: `I like my coffee black, just like my metal :coffee:`  
To this: `I like my coffee black, just like my metal 🍮`

