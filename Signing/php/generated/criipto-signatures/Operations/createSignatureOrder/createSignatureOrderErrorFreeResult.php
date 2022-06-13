<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\createSignatureOrder;

class createSignatureOrderErrorFreeResult extends \Spawnia\Sailor\ErrorFreeResult
{
    public createSignatureOrder $data;

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../sailor.php';
    }
}
