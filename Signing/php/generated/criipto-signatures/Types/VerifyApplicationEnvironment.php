<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class VerifyApplicationEnvironment
{
    public const PRODUCTION = 'PRODUCTION';
    public const TEST = 'TEST';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
