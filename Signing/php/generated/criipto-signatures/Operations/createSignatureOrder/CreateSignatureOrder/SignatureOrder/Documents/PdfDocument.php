<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Documents;

/**
 * @property string $id
 * @property string $__typename
 */
class PdfDocument extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     */
    public static function make($id): self
    {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        $instance->__typename = 'Document';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'id' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
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
