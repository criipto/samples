<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $documentId
 * @property string $status
 */
class UpdateSignatoryDocumentStatusInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $documentId
     * @param string $status
     */
    public static function make($documentId, $status): self
    {
        $instance = new self;

        if ($documentId !== self::UNDEFINED) {
            $instance->documentId = $documentId;
        }
        if ($status !== self::UNDEFINED) {
            $instance->status = $status;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'documentId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'status' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\EnumConverter),
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
