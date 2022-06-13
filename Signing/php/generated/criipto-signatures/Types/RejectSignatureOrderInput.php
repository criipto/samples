<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property bool $dummy
 * @property string|null $reason
 */
class RejectSignatureOrderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param bool $dummy
     * @param string|null $reason
     */
    public static function make(
        $dummy,
        $reason = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($dummy !== self::UNDEFINED) {
            $instance->dummy = $dummy;
        }
        if ($reason !== self::UNDEFINED) {
            $instance->reason = $reason;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'dummy' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
            'reason' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
