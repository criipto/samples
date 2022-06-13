<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\closeSignatureOrder;

/**
 * @property string $__typename
 * @property \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\CloseSignatureOrderOutput|null $closeSignatureOrder
 */
class closeSignatureOrder extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\CloseSignatureOrderOutput|null $closeSignatureOrder
     */
    public static function make($closeSignatureOrder = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'): self
    {
        $instance = new self;

        $instance->__typename = 'Mutation';
        if ($closeSignatureOrder !== self::UNDEFINED) {
            $instance->closeSignatureOrder = $closeSignatureOrder;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'closeSignatureOrder' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\CloseSignatureOrderOutput),
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
