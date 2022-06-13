<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $title
 * @property string $blob
 * @property string $storageMode
 * @property string|null $reference
 */
class PadesDocumentInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $title
     * @param string $blob
     * @param string $storageMode
     * @param string|null $reference
     */
    public static function make(
        $title,
        $blob,
        $storageMode,
        $reference = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($title !== self::UNDEFINED) {
            $instance->title = $title;
        }
        if ($blob !== self::UNDEFINED) {
            $instance->blob = $blob;
        }
        if ($storageMode !== self::UNDEFINED) {
            $instance->storageMode = $storageMode;
        }
        if ($reference !== self::UNDEFINED) {
            $instance->reference = $reference;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'title' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'blob' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'storageMode' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\EnumConverter),
            'reference' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
