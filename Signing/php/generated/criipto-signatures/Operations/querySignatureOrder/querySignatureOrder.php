<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\querySignatureOrder;

/**
 * @property string $__typename
 * @property \Criipto\SignaturesApi\Operations\querySignatureOrder\SignatureOrder\SignatureOrder|null $signatureOrder
 */
class querySignatureOrder extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Operations\querySignatureOrder\SignatureOrder\SignatureOrder|null $signatureOrder
     */
    public static function make($signatureOrder = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'): self
    {
        $instance = new self;

        $instance->__typename = 'Query';
        if ($signatureOrder !== self::UNDEFINED) {
            $instance->signatureOrder = $signatureOrder;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'signatureOrder' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Operations\querySignatureOrder\SignatureOrder\SignatureOrder),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../sailor.php';
    }
}
