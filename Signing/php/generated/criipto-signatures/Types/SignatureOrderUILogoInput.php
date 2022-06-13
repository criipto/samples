<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $src
 * @property string|null $href
 */
class SignatureOrderUILogoInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $src
     * @param string|null $href
     */
    public static function make(
        $src,
        $href = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($src !== self::UNDEFINED) {
            $instance->src = $src;
        }
        if ($href !== self::UNDEFINED) {
            $instance->href = $href;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'src' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'href' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
