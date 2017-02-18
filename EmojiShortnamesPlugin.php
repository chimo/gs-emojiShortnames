<?php

if (!defined('GNUSOCIAL')) {
    exit(1);
}

// composer
require 'vendor/autoload.php';

use Emojione\Emojione;

class EmojiShortnamesPlugin extends Plugin {
    const VERSION = '1.0.2';

    /**
     * Replace shortnames with emoji
     */
    function onStartNoticeSave($notice) {
        $notice->rendered = Emojione::shortnameToUnicode($notice->rendered);
        $notice->content = Emojione::shortnameToUnicode($notice->content);

        return true;
    }

    function onEndShowScripts($action) {
        $action->script($this->path('node_modules/jquery-textcomplete/dist/jquery.textcomplete.min.js'));
        $action->script($this->path('vendor/emojione/emojione/lib/js/emojione.min.js'));
        $action->element('script', array('id' => 'es', 'src' => $this->path('js/emoji-shortnames.js')));
    }

    function onEndShowStyles($action) {
        $action->cssLink($this->path('css/emoji-shortnames.css'));
    }

    /**
     * Plugin version data
     *
     * @param array &$versions array of version data
     *
     * @return value
     */
    function onPluginVersion(array &$versions)
    {
        $versions[] = array('name' => 'EmojiShortnames',
                            'version' => self::VERSION,
                            'author' => 'Chimo',
                            'homepage' => 'https://github.com/chimo/gs-emojiShortnames',
                            'description' =>
                            // TRANS: Plugin description.
                            _m('Use emoji shortnames on GNU social'));
        return true;
    }

}

