<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $signatureOrderId
 */
class CancelSignatureOrderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $signatureOrderId
     */
    public static function make($signatureOrderId): self
    {
        $instance = new self;

        if ($signatureOrderId !== self::UNDEFINED) {
            $instance->signatureOrderId = $signatureOrderId;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrderId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
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
