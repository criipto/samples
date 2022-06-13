<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class DocumentStorageMode
{
    public const Temporary = 'Temporary';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
