<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Types;

class SignatoryDocumentStatus
{
    public const OPENED = 'OPENED';
    public const APPROVED = 'APPROVED';
    public const REJECTED = 'REJECTED';
    public const PREAPPROVED = 'PREAPPROVED';

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
