<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder;

/**
 * @property string $id
 * @property array<int, \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Documents\PdfDocument> $documents
 * @property array<int, \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Signatories\Signatory> $signatories
 * @property string $__typename
 */
class SignatureOrder extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     * @param array<int, \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Documents\PdfDocument> $documents
     * @param array<int, \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Signatories\Signatory> $signatories
     */
    public static function make($id, $documents, $signatories): self
    {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        if ($documents !== self::UNDEFINED) {
            $instance->documents = $documents;
        }
        if ($signatories !== self::UNDEFINED) {
            $instance->signatories = $signatories;
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
            'PdfDocument' => '\\Criipto\\SignaturesApi\\Operations\\createSignatureOrder\\CreateSignatureOrder\\SignatureOrder\\Documents\\PdfDocument',
        ])))),
            'signatories' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Operations\createSignatureOrder\CreateSignatureOrder\SignatureOrder\Signatories\Signatory))),
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
