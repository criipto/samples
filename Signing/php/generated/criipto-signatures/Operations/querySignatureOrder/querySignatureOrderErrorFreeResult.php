<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\querySignatureOrder;

class querySignatureOrderErrorFreeResult extends \Spawnia\Sailor\ErrorFreeResult
{
    public querySignatureOrder $data;

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../sailor.php';
    }
}
