<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $name
 */
class NoopEvidenceProviderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $name
     */
    public static function make($name): self
    {
        $instance = new self;

        if ($name !== self::UNDEFINED) {
            $instance->name = $name;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'name' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
