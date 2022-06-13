<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $signatureOrderId
 * @property string $signatoryId
 */
class DeleteSignatoryInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $signatureOrderId
     * @param string $signatoryId
     */
    public static function make($signatureOrderId, $signatoryId): self
    {
        $instance = new self;

        if ($signatureOrderId !== self::UNDEFINED) {
            $instance->signatureOrderId = $signatureOrderId;
        }
        if ($signatoryId !== self::UNDEFINED) {
            $instance->signatoryId = $signatoryId;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrderId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'signatoryId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
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
