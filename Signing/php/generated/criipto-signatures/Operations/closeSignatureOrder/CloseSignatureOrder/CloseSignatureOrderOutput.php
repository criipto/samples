<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder;

/**
 * @property \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder\SignatureOrder $signatureOrder
 * @property string $__typename
 */
class CloseSignatureOrderOutput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder\SignatureOrder $signatureOrder
     */
    public static function make($signatureOrder): self
    {
        $instance = new self;

        if ($signatureOrder !== self::UNDEFINED) {
            $instance->signatureOrder = $signatureOrder;
        }
        $instance->__typename = 'CloseSignatureOrderOutput';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrder' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder\SignatureOrder),
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../../sailor.php';
    }
}
