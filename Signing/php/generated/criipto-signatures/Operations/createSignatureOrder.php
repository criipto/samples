<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations;

/**
 * @extends \Spawnia\Sailor\Operation<\Criipto\SignaturesApi\Operations\createSignatureOrder\createSignatureOrderResult>
 */
class createSignatureOrder extends \Spawnia\Sailor\Operation
{
    /**
     * @param \Criipto\SignaturesApi\Types\CreateSignatureOrderInput $input
     */
    public static function execute($input): createSignatureOrder\createSignatureOrderResult
    {
        return self::executeOperation(
            $input,
        );
    }

    protected static function converters(): array
    {
        static $converters;

        return $converters ??= [
            ['input', new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\CreateSignatureOrderInput)],
        ];
    }

    public static function document(): string
    {
        return /* @lang GraphQL */ 'mutation createSignatureOrder($input: CreateSignatureOrderInput!) {
          __typename
          createSignatureOrder(input: $input) {
            __typename
            signatureOrder {
              __typename
              id
              documents {
                __typename
                id
              }
              signatories {
                __typename
                id
                status
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
