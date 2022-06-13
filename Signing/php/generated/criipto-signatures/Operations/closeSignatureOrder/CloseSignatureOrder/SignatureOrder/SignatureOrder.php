<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder;

/**
 * @property string $id
 * @property array<int, \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder\Documents\PdfDocument> $documents
 * @property string $__typename
 */
class SignatureOrder extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     * @param array<int, \Criipto\SignaturesApi\Operations\closeSignatureOrder\CloseSignatureOrder\SignatureOrder\Documents\PdfDocument> $documents
     */
    public static function make($id, $documents): self
    {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        if ($documents !== self::UNDEFINED) {
            $instance->documents = $documents;
        }
        $instance->__typename = 'SignatureOrder';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'id' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'documents' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\PolymorphicConverter([
            'PdfDocument' => '\\Criipto\\SignaturesApi\\Operations\\closeSignatureOrder\\CloseSignatureOrder\\SignatureOrder\\Documents\\PdfDocument',
        ])))),
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
