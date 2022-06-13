<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class Language
{
    public const DA_DK = 'DA_DK';
    public const EN_US = 'EN_US';
    public const SV_SE = 'SV_SE';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
