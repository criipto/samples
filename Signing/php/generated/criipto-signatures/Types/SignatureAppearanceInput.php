<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property array<int, string> $identifierFromEvidence
 */
class SignatureAppearanceInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param array<int, string> $identifierFromEvidence
     */
    public static function make($identifierFromEvidence): self
    {
        $instance = new self;

        if ($identifierFromEvidence !== self::UNDEFINED) {
            $instance->identifierFromEvidence = $identifierFromEvidence;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'identifierFromEvidence' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter))),
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
