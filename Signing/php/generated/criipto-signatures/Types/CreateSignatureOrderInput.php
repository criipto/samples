<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property array<int, \Criipto\SignaturesApi\Types\DocumentInput> $documents
 * @property string|null $title
 * @property bool|null $disableVerifyEvidenceProvider
 * @property bool|null $fixDocumentFormattingErrors
 * @property int|null $maxSignatories
 * @property int|null $expiresInDays
 * @property string|null $timezone
 * @property array<int, \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput>|null $signatories
 * @property array<int, \Criipto\SignaturesApi\Types\EvidenceProviderInput>|null $evidenceProviders
 * @property \Criipto\SignaturesApi\Types\CreateSignatureOrderUIInput|null $ui
 * @property \Criipto\SignaturesApi\Types\CreateSignatureOrderWebhookInput|null $webhook
 * @property \Criipto\SignaturesApi\Types\SignatureAppearanceInput|null $signatureAppearance
 */
class CreateSignatureOrderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param array<int, \Criipto\SignaturesApi\Types\DocumentInput> $documents
     * @param string|null $title
     * @param bool|null $disableVerifyEvidenceProvider
     * @param bool|null $fixDocumentFormattingErrors
     * @param int|null $maxSignatories
     * @param int|null $expiresInDays
     * @param string|null $timezone
     * @param array<int, \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput>|null $signatories
     * @param array<int, \Criipto\SignaturesApi\Types\EvidenceProviderInput>|null $evidenceProviders
     * @param \Criipto\SignaturesApi\Types\CreateSignatureOrderUIInput|null $ui
     * @param \Criipto\SignaturesApi\Types\CreateSignatureOrderWebhookInput|null $webhook
     * @param \Criipto\SignaturesApi\Types\SignatureAppearanceInput|null $signatureAppearance
     */
    public static function make(
        $documents,
        $title = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $disableVerifyEvidenceProvider = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $fixDocumentFormattingErrors = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $maxSignatories = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $expiresInDays = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $timezone = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $signatories = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $evidenceProviders = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $ui = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $webhook = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $signatureAppearance = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($documents !== self::UNDEFINED) {
            $instance->documents = $documents;
        }
        if ($title !== self::UNDEFINED) {
            $instance->title = $title;
        }
        if ($disableVerifyEvidenceProvider !== self::UNDEFINED) {
            $instance->disableVerifyEvidenceProvider = $disableVerifyEvidenceProvider;
        }
        if ($fixDocumentFormattingErrors !== self::UNDEFINED) {
            $instance->fixDocumentFormattingErrors = $fixDocumentFormattingErrors;
        }
        if ($maxSignatories !== self::UNDEFINED) {
            $instance->maxSignatories = $maxSignatories;
        }
        if ($expiresInDays !== self::UNDEFINED) {
            $instance->expiresInDays = $expiresInDays;
        }
        if ($timezone !== self::UNDEFINED) {
            $instance->timezone = $timezone;
        }
        if ($signatories !== self::UNDEFINED) {
            $instance->signatories = $signatories;
        }
        if ($evidenceProviders !== self::UNDEFINED) {
            $instance->evidenceProviders = $evidenceProviders;
        }
        if ($ui !== self::UNDEFINED) {
            $instance->ui = $ui;
        }
        if ($webhook !== self::UNDEFINED) {
            $instance->webhook = $webhook;
        }
        if ($signatureAppearance !== self::UNDEFINED) {
            $instance->signatureAppearance = $signatureAppearance;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'documents' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\DocumentInput))),
            'title' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'disableVerifyEvidenceProvider' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
            'fixDocumentFormattingErrors' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
            'maxSignatories' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\IntConverter),
            'expiresInDays' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\IntConverter),
            'timezone' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'signatories' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput))),
            'evidenceProviders' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\EvidenceProviderInput))),
            'ui' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\CreateSignatureOrderUIInput),
            'webhook' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\CreateSignatureOrderWebhookInput),
            'signatureAppearance' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\SignatureAppearanceInput),
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
