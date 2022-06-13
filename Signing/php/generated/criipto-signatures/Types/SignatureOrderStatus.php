<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class SignatureOrderStatus
{
    public const OPEN = 'OPEN';
    public const CLOSED = 'CLOSED';
    public const CANCELLED = 'CANCELLED';
    public const EXPIRED = 'EXPIRED';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
