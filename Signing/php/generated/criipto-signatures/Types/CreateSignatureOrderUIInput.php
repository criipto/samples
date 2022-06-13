<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string|null $signatoryRedirectUri
 * @property string|null $language
 * @property \Criipto\SignaturesApi\Types\SignatureOrderUILogoInput|null $logo
 * @property string|null $stylesheet
 * @property bool|null $disableRejection
 */
class CreateSignatureOrderUIInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string|null $signatoryRedirectUri
     * @param string|null $language
     * @param \Criipto\SignaturesApi\Types\SignatureOrderUILogoInput|null $logo
     * @param string|null $stylesheet
     * @param bool|null $disableRejection
     */
    public static function make(
        $signatoryRedirectUri = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $language = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $logo = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $stylesheet = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $disableRejection = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($signatoryRedirectUri !== self::UNDEFINED) {
            $instance->signatoryRedirectUri = $signatoryRedirectUri;
        }
        if ($language !== self::UNDEFINED) {
            $instance->language = $language;
        }
        if ($logo !== self::UNDEFINED) {
            $instance->logo = $logo;
        }
        if ($stylesheet !== self::UNDEFINED) {
            $instance->stylesheet = $stylesheet;
        }
        if ($disableRejection !== self::UNDEFINED) {
            $instance->disableRejection = $disableRejection;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatoryRedirectUri' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'language' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\EnumConverter),
            'logo' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\SignatureOrderUILogoInput),
            'stylesheet' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'disableRejection' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
