<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\addSignatory\AddSignatory;

/**
 * @property \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder\SignatureOrder $signatureOrder
 * @property \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\Signatory\Signatory $signatory
 * @property string $__typename
 */
class AddSignatoryOutput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder\SignatureOrder $signatureOrder
     * @param \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\Signatory\Signatory $signatory
     */
    public static function make($signatureOrder, $signatory): self
    {
        $instance = new self;

        if ($signatureOrder !== self::UNDEFINED) {
            $instance->signatureOrder = $signatureOrder;
        }
        if ($signatory !== self::UNDEFINED) {
            $instance->signatory = $signatory;
        }
        $instance->__typename = 'AddSignatoryOutput';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrder' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder\SignatureOrder),
            'signatory' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\Signatory\Signatory),
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
