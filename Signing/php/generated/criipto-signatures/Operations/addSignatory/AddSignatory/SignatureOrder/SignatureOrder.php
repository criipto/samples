<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder;

/**
 * @property array<int, \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder\Signatories\Signatory> $signatories
 * @property string $__typename
 */
class SignatureOrder extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param array<int, \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder\Signatories\Signatory> $signatories
     */
    public static function make($signatories): self
    {
        $instance = new self;

        if ($signatories !== self::UNDEFINED) {
            $instance->signatories = $signatories;
        }
        $instance->__typename = 'SignatureOrder';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatories' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\SignatureOrder\Signatories\Signatory))),
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../../../sailor.php';
    }
}
