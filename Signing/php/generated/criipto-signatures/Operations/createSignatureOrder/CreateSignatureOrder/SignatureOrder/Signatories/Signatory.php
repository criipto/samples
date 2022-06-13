<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Signatories;

/**
 * @property string $id
 * @property string $status
 * @property string $__typename
 */
class Signatory extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     * @param string $status
     */
    public static function make($id, $status): self
    {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        if ($status !== self::UNDEFINED) {
            $instance->status = $status;
        }
        $instance->__typename = 'Signatory';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'id' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'status' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\EnumConverter),
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../../../../sailor.php';
    }
}
