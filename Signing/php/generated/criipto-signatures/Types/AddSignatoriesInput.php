<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $signatureOrderId
 * @property array<int, \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput> $signatories
 */
class AddSignatoriesInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $signatureOrderId
     * @param array<int, \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput> $signatories
     */
    public static function make($signatureOrderId, $signatories): self
    {
        $instance = new self;

        if ($signatureOrderId !== self::UNDEFINED) {
            $instance->signatureOrderId = $signatureOrderId;
        }
        if ($signatories !== self::UNDEFINED) {
            $instance->signatories = $signatories;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrderId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'signatories' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput))),
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
