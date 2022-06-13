<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $name
 * @property string $domain
 * @property string $clientID
 * @property string $audience
 * @property array<int, string>|null $acrValues
 * @property bool|null $alwaysRedirect
 * @property string|null $uniqueEvidenceKey
 */
class OidcEvidenceProviderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $name
     * @param string $domain
     * @param string $clientID
     * @param string $audience
     * @param array<int, string>|null $acrValues
     * @param bool|null $alwaysRedirect
     * @param string|null $uniqueEvidenceKey
     */
    public static function make(
        $name,
        $domain,
        $clientID,
        $audience,
        $acrValues = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $alwaysRedirect = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $uniqueEvidenceKey = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($name !== self::UNDEFINED) {
            $instance->name = $name;
        }
        if ($domain !== self::UNDEFINED) {
            $instance->domain = $domain;
        }
        if ($clientID !== self::UNDEFINED) {
            $instance->clientID = $clientID;
        }
        if ($audience !== self::UNDEFINED) {
            $instance->audience = $audience;
        }
        if ($acrValues !== self::UNDEFINED) {
            $instance->acrValues = $acrValues;
        }
        if ($alwaysRedirect !== self::UNDEFINED) {
            $instance->alwaysRedirect = $alwaysRedirect;
        }
        if ($uniqueEvidenceKey !== self::UNDEFINED) {
            $instance->uniqueEvidenceKey = $uniqueEvidenceKey;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'name' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'domain' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'clientID' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'audience' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'acrValues' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\ListConverter(new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter))),
            'alwaysRedirect' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\BooleanConverter),
            'uniqueEvidenceKey' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
