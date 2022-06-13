<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class SignatoryStatus
{
    public const OPEN = 'OPEN';
    public const SIGNED = 'SIGNED';
    public const REJECTED = 'REJECTED';
    public const ERROR = 'ERROR';
    public const DELETED = 'DELETED';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
