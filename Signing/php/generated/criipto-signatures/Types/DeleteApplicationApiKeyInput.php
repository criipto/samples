<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $applicationId
 * @property string $apiKeyId
 */
class DeleteApplicationApiKeyInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $applicationId
     * @param string $apiKeyId
     */
    public static function make($applicationId, $apiKeyId): self
    {
        $instance = new self;

        if ($applicationId !== self::UNDEFINED) {
            $instance->applicationId = $applicationId;
        }
        if ($apiKeyId !== self::UNDEFINED) {
            $instance->apiKeyId = $apiKeyId;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'applicationId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'apiKeyId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
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
