<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder\Documents;

/**
 * @property string $id
 * @property string $__typename
 * @property string|null $blob
 */
class PdfDocument extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     * @param string|null $blob
     */
    public static function make(
        $id,
        $blob = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        $instance->__typename = 'Document';
        if ($blob !== self::UNDEFINED) {
            $instance->blob = $blob;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'id' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'blob' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
