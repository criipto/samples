<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $id
 * @property \Criipto\SignaturesApi\Types\SignOidcInput|null $oidc
 * @property \Criipto\SignaturesApi\Types\SignDrawableInput|null $drawable
 * @property bool|null $noop
 */
class SignInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     * @param \Criipto\SignaturesApi\Types\SignOidcInput|null $oidc
     * @param \Criipto\SignaturesApi\Types\SignDrawableInput|null $drawable
     * @param bool|null $noop
     */
    public static function make(
        $id,
        $oidc = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $drawable = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $noop = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        if ($oidc !== self::UNDEFINED) {
            $instance->oidc = $oidc;
        }
        if ($drawable !== self::UNDEFINED) {
            $instance->drawable = $drawable;
        }
        if ($noop !== self::UNDEFINED) {
            $instance->noop = $noop;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'id' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'oidc' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\SignOidcInput),
            'drawable' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\SignDrawableInput),
            'noop' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
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
