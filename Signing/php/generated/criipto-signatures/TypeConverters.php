<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi;

class TypeConverters
{
    public static function Int(): \Spawnia\Sailor\Convert\IntConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\IntConverter();
    }

    public static function Float(): \Spawnia\Sailor\Convert\FloatConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\FloatConverter();
    }

    public static function String(): \Spawnia\Sailor\Convert\StringConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\StringConverter();
    }

    public static function Boolean(): \Spawnia\Sailor\Convert\BooleanConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\BooleanConverter();
    }

    public static function ID(): \Spawnia\Sailor\Convert\IDConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\IDConverter();
    }

    public static function ApplicationApiKeyMode(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function SignatureOrderStatus(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function DateTime(): \Spawnia\Sailor\Convert\StringConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\StringConverter();
    }

    public static function Blob(): \Spawnia\Sailor\Convert\StringConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\StringConverter();
    }

    public static function SignatoryDocumentStatus(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function SignatoryStatus(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function Language(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function VerifyApplicationEnvironment(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function AddSignatoriesInput(): Types\AddSignatoriesInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\AddSignatoriesInput();
    }

    public static function CreateSignatureOrderSignatoryInput(): Types\CreateSignatureOrderSignatoryInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CreateSignatureOrderSignatoryInput();
    }

    public static function SignatoryDocumentInput(): Types\SignatoryDocumentInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignatoryDocumentInput();
    }

    public static function SignatoryEvidenceProviderInput(): Types\SignatoryEvidenceProviderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignatoryEvidenceProviderInput();
    }

    public static function SignatoryEvidenceValidationInput(): Types\SignatoryEvidenceValidationInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignatoryEvidenceValidationInput();
    }

    public static function AddSignatoryInput(): Types\AddSignatoryInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\AddSignatoryInput();
    }

    public static function CancelSignatureOrderInput(): Types\CancelSignatureOrderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CancelSignatureOrderInput();
    }

    public static function ChangeSignatoryInput(): Types\ChangeSignatoryInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\ChangeSignatoryInput();
    }

    public static function CleanupSignatureOrderInput(): Types\CleanupSignatureOrderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CleanupSignatureOrderInput();
    }

    public static function CloseSignatureOrderInput(): Types\CloseSignatureOrderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CloseSignatureOrderInput();
    }

    public static function CreateApplicationInput(): Types\CreateApplicationInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CreateApplicationInput();
    }

    public static function CreateApplicationApiKeyInput(): Types\CreateApplicationApiKeyInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CreateApplicationApiKeyInput();
    }

    public static function CreateSignatureOrderInput(): Types\CreateSignatureOrderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CreateSignatureOrderInput();
    }

    public static function DocumentInput(): Types\DocumentInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\DocumentInput();
    }

    public static function PadesDocumentInput(): Types\PadesDocumentInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\PadesDocumentInput();
    }

    public static function DocumentStorageMode(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function EvidenceProviderInput(): Types\EvidenceProviderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\EvidenceProviderInput();
    }

    public static function OidcEvidenceProviderInput(): Types\OidcEvidenceProviderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\OidcEvidenceProviderInput();
    }

    public static function CriiptoVerifyProviderInput(): Types\CriiptoVerifyProviderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CriiptoVerifyProviderInput();
    }

    public static function NoopEvidenceProviderInput(): Types\NoopEvidenceProviderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\NoopEvidenceProviderInput();
    }

    public static function DrawableEvidenceProviderInput(): Types\DrawableEvidenceProviderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\DrawableEvidenceProviderInput();
    }

    public static function CreateSignatureOrderUIInput(): Types\CreateSignatureOrderUIInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CreateSignatureOrderUIInput();
    }

    public static function SignatureOrderUILogoInput(): Types\SignatureOrderUILogoInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignatureOrderUILogoInput();
    }

    public static function CreateSignatureOrderWebhookInput(): Types\CreateSignatureOrderWebhookInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\CreateSignatureOrderWebhookInput();
    }

    public static function SignatureAppearanceInput(): Types\SignatureAppearanceInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignatureAppearanceInput();
    }

    public static function DeleteApplicationApiKeyInput(): Types\DeleteApplicationApiKeyInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\DeleteApplicationApiKeyInput();
    }

    public static function DeleteSignatoryInput(): Types\DeleteSignatoryInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\DeleteSignatoryInput();
    }

    public static function ExtendSignatureOrderInput(): Types\ExtendSignatureOrderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\ExtendSignatureOrderInput();
    }

    public static function RefreshApplicationApiKeyInput(): Types\RefreshApplicationApiKeyInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\RefreshApplicationApiKeyInput();
    }

    public static function RejectSignatureOrderInput(): Types\RejectSignatureOrderInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\RejectSignatureOrderInput();
    }

    public static function SignInput(): Types\SignInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignInput();
    }

    public static function SignOidcInput(): Types\SignOidcInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignOidcInput();
    }

    public static function SignDrawableInput(): Types\SignDrawableInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignDrawableInput();
    }

    public static function SignatoryBeaconInput(): Types\SignatoryBeaconInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignatoryBeaconInput();
    }

    public static function SignWithOidcJWTInput(): Types\SignWithOidcJWTInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\SignWithOidcJWTInput();
    }

    public static function UpdateSignatoryDocumentStatusInput(): Types\UpdateSignatoryDocumentStatusInput
    {
        static $converter;

        return $converter ??= new \Criipto\SignaturesApi\Types\UpdateSignatoryDocumentStatusInput();
    }

    public static function __TypeKind(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function __DirectiveLocation(): \Spawnia\Sailor\Convert\EnumConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\EnumConverter();
    }

    public static function Date(): \Spawnia\Sailor\Convert\StringConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\StringConverter();
    }

    public static function URI(): \Spawnia\Sailor\Convert\StringConverter
    {
        static $converter;

        return $converter ??= new \Spawnia\Sailor\Convert\StringConverter();
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../sailor.php';
    }
}
