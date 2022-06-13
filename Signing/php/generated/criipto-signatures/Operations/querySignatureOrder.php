<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations;

/**
 * @extends \Spawnia\Sailor\Operation<\Criipto\SignaturesApi\Operations\querySignatureOrder\querySignatureOrderResult>
 */
class querySignatureOrder extends \Spawnia\Sailor\Operation
{
    /**
     * @param string $id
     */
    public static function execute($id): querySignatureOrder\querySignatureOrderResult
    {
        return self::executeOperation(
            $id,
        );
    }

    protected static function converters(): array
    {
        static $converters;

        return $converters ??= [
            ['id', new \Spawnia\Sailor\Convert\NonNullConverter(new \Spawnia\Sailor\Convert\IDConverter)],
        ];
    }

    public static function document(): string
    {
        return /* @lang GraphQL */ 'query querySignatureOrder($id: ID!) {
          __typename
          signatureOrder(id: $id) {
            __typename
            status
            signatories {
              __typename
              id
              status
            }
            documents {
              __typename
              blob
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
