<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property array<int, string>|null $acrValues
 * @property bool|null $alwaysRedirect
 * @property string|null $uniqueEvidenceKey
 */
class CriiptoVerifyProviderInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param array<int, string>|null $acrValues
     * @param bool|null $alwaysRedirect
     * @param string|null $uniqueEvidenceKey
     */
    public static function make(
        $acrValues = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $alwaysRedirect = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $uniqueEvidenceKey = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

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
