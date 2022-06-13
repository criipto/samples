<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $signatureOrderId
 * @property int|null $retainDocumentsForDays
 */
class CloseSignatureOrderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $signatureOrderId
     * @param int|null $retainDocumentsForDays
     */
    public static function make(
        $signatureOrderId,
        $retainDocumentsForDays = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($signatureOrderId !== self::UNDEFINED) {
            $instance->signatureOrderId = $signatureOrderId;
        }
        if ($retainDocumentsForDays !== self::UNDEFINED) {
            $instance->retainDocumentsForDays = $retainDocumentsForDays;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'signatureOrderId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'retainDocumentsForDays' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\IntConverter),
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
