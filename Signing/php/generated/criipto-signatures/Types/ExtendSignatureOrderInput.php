<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $signatureOrderId
 * @property int $additionalExpirationInDays
 */
class ExtendSignatureOrderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $signatureOrderId
     * @param int $additionalExpirationInDays
     */
    public static function make($signatureOrderId, $additionalExpirationInDays): self
    {
        $instance = new self;

        if ($signatureOrderId !== self::UNDEFINED) {
            $instance->signatureOrderId = $signatureOrderId;
        }
        if ($additionalExpirationInDays !== self::UNDEFINED) {
            $instance->additionalExpirationInDays = $additionalExpirationInDays;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrderId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'additionalExpirationInDays' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IntConverter),
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
