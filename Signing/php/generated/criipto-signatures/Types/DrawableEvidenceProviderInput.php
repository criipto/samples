<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property bool|null $requireName
 */
class DrawableEvidenceProviderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param bool|null $requireName
     */
    public static function make($requireName = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'): self
    {
        $instance = new self;

        if ($requireName !== self::UNDEFINED) {
            $instance->requireName = $requireName;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'requireName' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
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
