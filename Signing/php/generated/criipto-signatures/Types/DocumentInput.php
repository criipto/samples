<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property \Criipto\SignaturesApi\Types\PadesDocumentInput $pdf
 */
class DocumentInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Types\PadesDocumentInput $pdf
     */
    public static function make($pdf): self
    {
        $instance = new self;

        if ($pdf !== self::UNDEFINED) {
            $instance->pdf = $pdf;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'pdf' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\PadesDocumentInput),
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
