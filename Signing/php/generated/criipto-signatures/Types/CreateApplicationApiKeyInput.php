<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

/**
 * @property string $applicationId
 * @property string|null $mode
 * @property string|null $note
 */
class CreateApplicationApiKeyInput extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $applicationId
     * @param string|null $mode
     * @param string|null $note
     */
    public static function make(
        $applicationId,
        $mode = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.',
        $note = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'
    ): self {
        $instance = new self;

        if ($applicationId !== self::UNDEFINED) {
            $instance->applicationId = $applicationId;
        }
        if ($mode !== self::UNDEFINED) {
            $instance->mode = $mode;
        }
        if ($note !== self::UNDEFINED) {
            $instance->note = $note;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'applicationId' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'mode' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\EnumConverter),
            'note' => new \Spawnia\Sailor\Convert\NullConverter(new \Spawnia\Sailor\Convert\StringConverter),
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
