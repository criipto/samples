<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $jwt
 */
class SignOidcInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $jwt
     */
    public static function make($jwt): self
    {
        $instance = new self;

        if ($jwt !== self::UNDEFINED) {
            $instance->jwt = $jwt;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'jwt' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
