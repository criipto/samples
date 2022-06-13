<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\addSignatory;

/**
 * @property string $__typename
 * @property \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\AddSignatoryOutput|null $addSignatory
 */
class addSignatory extends \Spawnia\Sailor\ObjectLike
{
    /**
     * @param \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\AddSignatoryOutput|null $addSignatory
     */
    public static function make($addSignatory = 'Special default value that allows Sailor to differentiate between explicitly passing null and not passing a value at all.'): self
    {
        $instance = new self;

        $instance->__typename = 'Mutation';
        if ($addSignatory !== self::UNDEFINED) {
            $instance->addSignatory = $addSignatory;
        }

        return $instance;
    }

    protected function converters(): array
    {
        static $converters;

        return $converters ??= [
            '__typename' => new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\StringConverter),
            'addSignatory' => new \Spawnia\Sailor\Convert\NullConverter(new \Criipto\SignaturesApi\Operations\addSignatory\AddSignatory\AddSignatoryOutput),
        ];
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../sailor.php';
    }
}
