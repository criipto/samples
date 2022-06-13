<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\Signatory;

/**
 * @property string $id
 * @property string $href
 * @property string $__typename
 */
class Signatory extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param string $id
     * @param string $href
     */
    public static function make($id, $href): self
    {
        $instance = new self;

        if ($id !== self::UNDEFINED) {
            $instance->id = $id;
        }
        if ($href !== self::UNDEFINED) {
            $instance->href = $href;
        }
        $instance->__typename = 'Signatory';

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            'id' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter),
            'href' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../../../sailor.php';
    }
}
