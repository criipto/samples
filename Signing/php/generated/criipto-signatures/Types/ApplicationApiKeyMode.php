<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class ApplicationApiKeyMode
{
    public const READ_WRITE = 'READ_WRITE';
    public const READ_ONLY = 'READ_ONLY';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
