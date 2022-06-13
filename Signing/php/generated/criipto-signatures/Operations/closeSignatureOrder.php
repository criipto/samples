<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations;

/**
 * @extends \Spawnia\Sailor\Operation<\Criipto\SignaturesApi\Operations\closeSignatureOrder\closeSignatureOrderResult>
 */
class closeSignatureOrder extends \Spawnia\Sailor\Operation
{
    /**
     * @param \Criipto\SignaturesApi\Types\CloseSignatureOrderInput $input
     */
    public static function execute($input): closeSignatureOrder\closeSignatureOrderResult
    {
        return self::executeOperation(
            $input,
        );
    }

    protected static function converters(): array
    {
        static $converters;

        return $converters ??= [
            ['input', new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\CloseSignatureOrderInput)],
        ];
    }

    public static function document(): string
    {
        return /* @lang GraphQL */ 'mutation closeSignatureOrder($input: CloseSignatureOrderInput!) {
          __typename
          closeSignatureOrder(input: $input) {
            __typename
            signatureOrder {
              __typename
              id
              documents {
                __typename
                id
                blob
              }
            }
          }
        }';
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../sailor.php';
    }
}
