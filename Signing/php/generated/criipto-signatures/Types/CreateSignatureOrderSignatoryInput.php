<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string|null $reference
 * @property array<int, \Criipto\SignaturesApi\Types\SignatoryDocumentInput>|null $documents
 * @property array<int, \Criipto\SignaturesApi\Types\SignatoryEvidenceProviderInput>|null $evidenceProviders
 * @property array<int, \Criipto\SignaturesApi\Types\SignatoryEvidenceValidationInput>|null $evidenceValidation
 */
class CreateSignatureOrderSignatoryInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string|null $reference
     * @param array<int, \Criipto\SignaturesApi\Types\SignatoryDocumentInput>|null $documents
     * @param array<int, \Criipto\SignaturesApi\Types\SignatoryEvidenceProviderInput>|null $evidenceProviders
     * @param array<int, \Criipto\SignaturesApi\Types\SignatoryEvidenceValidationInput>|null $evidenceValidation
     */
    public static function make(
        $reference = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $documents = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $evidenceProviders = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $evidenceValidation = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($reference !== self::UNDEFINED) {
            $instance->reference = $reference;
        }
        if ($documents !== self::UNDEFINED) {
            $instance->documents = $documents;
        }
        if ($evidenceProviders !== self::UNDEFINED) {
            $instance->evidenceProviders = $evidenceProviders;
        }
        if ($evidenceValidation !== self::UNDEFINED) {
            $instance->evidenceValidation = $evidenceValidation;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'reference' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'documents' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\SignatoryDocumentInput))),
            'evidenceProviders' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\SignatoryEvidenceProviderInput))),
            'evidenceValidation' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\SignatoryEvidenceValidationInput))),
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
