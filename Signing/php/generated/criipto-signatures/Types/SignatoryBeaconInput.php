<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $lastActionAt
 */
class SignatoryBeaconInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $lastActionAt
     */
    public static function make($lastActionAt): self
    {
        $instance = new self;

        if ($lastActionAt !== self::UNDEFINED) {
            $instance->lastActionAt = $lastActionAt;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'lastActionAt' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
