<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property \Criipto\SignaturesApi\Types\OidcEvidenceProviderInput|null $oidc
 * @property \Criipto\SignaturesApi\Types\CriiptoVerifyProviderInput|null $criiptoVerify
 * @property \Criipto\SignaturesApi\Types\NoopEvidenceProviderInput|null $noop
 * @property bool|null $enabledByDefault
 * @property \Criipto\SignaturesApi\Types\DrawableEvidenceProviderInput|null $drawable
 */
class EvidenceProviderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Types\OidcEvidenceProviderInput|null $oidc
     * @param \Criipto\SignaturesApi\Types\CriiptoVerifyProviderInput|null $criiptoVerify
     * @param \Criipto\SignaturesApi\Types\NoopEvidenceProviderInput|null $noop
     * @param bool|null $enabledByDefault
     * @param \Criipto\SignaturesApi\Types\DrawableEvidenceProviderInput|null $drawable
     */
    public static function make(
        $oidc = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $criiptoVerify = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $noop = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $enabledByDefault = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $drawable = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($oidc !== self::UNDEFINED) {
            $instance->oidc = $oidc;
        }
        if ($criiptoVerify !== self::UNDEFINED) {
            $instance->criiptoVerify = $criiptoVerify;
        }
        if ($noop !== self::UNDEFINED) {
            $instance->noop = $noop;
        }
        if ($enabledByDefault !== self::UNDEFINED) {
            $instance->enabledByDefault = $enabledByDefault;
        }
        if ($drawable !== self::UNDEFINED) {
            $instance->drawable = $drawable;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'oidc' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\OidcEvidenceProviderInput),
            'criiptoVerify' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\CriiptoVerifyProviderInput),
            'noop' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\NoopEvidenceProviderInput),
            'enabledByDefault' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
            'drawable' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Types\DrawableEvidenceProviderInput),
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
