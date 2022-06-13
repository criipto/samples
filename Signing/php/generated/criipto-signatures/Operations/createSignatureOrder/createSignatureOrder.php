<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\createSignatureOrder;

/**
 * @property string $__typename
 * @property \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\CreateSignatureOrderOutput|null $createSignatureOrder
 */
class createSignatureOrder extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\CreateSignatureOrderOutput|null $createSignatureOrder
     */
    public static function make($createSignatureOrder = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'): self
    {
        $instance = new self;

        $instance->__typename = 'Mutation';
        if ($createSignatureOrder !== self::UNDEFINED) {
            $instance->createSignatureOrder = $createSignatureOrder;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'createSignatureOrder' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\CreateSignatureOrderOutput),
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
