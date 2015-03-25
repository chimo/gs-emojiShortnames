<?php

if (!defined('GNUSOCIAL')) {
    exit(1);
}

// composer
require 'vendor/autoload.php';

use Emojione\Emojione;

class EmojiShortnamesPlugin extends Plugin {
    const VERSION = '0.1';

    /**
     * Replace shortnames with emoji
     */
    function onStartNoticeSave($notice) {
        $notice->rendered = Emojione::shortnameToUnicode($notice->rendered);

        return true;
    }

    /**
     * Plugin version data
     *
     * @param array &$versions array of version data
     *
     * @return value
     */
    function onPluginVersion(&$versions)
    {
        $versions[] = array('name' => 'EmojiShortnames',
                            'version' => self::VERSION,
                            'author' => 'Stephane Berube',
                            'homepage' => 'https://github.com/chimo/gs-emojiShortnames',
                            'description' =>
                            // TRANS: Plugin description.
                            _m('TODO.'));
        return true;
    }

}

