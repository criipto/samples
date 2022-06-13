<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $tenantId
 * @property string $name
 * @property string $verifyApplicationRealm
 * @property string $verifyApplicationDomain
 * @property string $verifyApplicationEnvironment
 */
class CreateApplicationInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $tenantId
     * @param string $name
     * @param string $verifyApplicationRealm
     * @param string $verifyApplicationDomain
     * @param string $verifyApplicationEnvironment
     */
    public static function make(
        $tenantId,
        $name,
        $verifyApplicationRealm,
        $verifyApplicationDomain,
        $verifyApplicationEnvironment
    ): self {
        $instance = new self;

        if ($tenantId !== self::UNDEFINED) {
            $instance->tenantId = $tenantId;
        }
        if ($name !== self::UNDEFINED) {
            $instance->name = $name;
        }
        if ($verifyApplicationRealm !== self::UNDEFINED) {
            $instance->verifyApplicationRealm = $verifyApplicationRealm;
        }
        if ($verifyApplicationDomain !== self::UNDEFINED) {
            $instance->verifyApplicationDomain = $verifyApplicationDomain;
        }
        if ($verifyApplicationEnvironment !== self::UNDEFINED) {
            $instance->verifyApplicationEnvironment = $verifyApplicationEnvironment;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'tenantId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'name' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'verifyApplicationRealm' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'verifyApplicationDomain' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'verifyApplicationEnvironment' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\EnumConverter),
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
