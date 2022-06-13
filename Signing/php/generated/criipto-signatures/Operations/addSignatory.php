<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations;

/**
 * @extends \Spawnia\Sailor\Operation<\Criipto\SignaturesApi\Operations\addSignatory\addSignatoryResult>
 */
class addSignatory extends \Spawnia\Sailor\Operation
{
    /**
     * @param \Criipto\SignaturesApi\Types\AddSignatoryInput $input
     */
    public static function execute($input): addSignatory\addSignatoryResult
    {
        return self::executeOperation(
            $input,
        );
    }

    protected static function converters(): array
    {
        static $converters;

        return $converters ??= [
            ['input', new \Spawnia\Sailor\Convert\NonNullConverter(new \Criipto\SignaturesApi\Types\AddSignatoryInput)],
        ];
    }

    public static function document(): string
    {
        return /* @lang GraphQL */ 'mutation addSignatory($input: AddSignatoryInput!) {
          __typename
          addSignatory(input: $input) {
            __typename
            signatureOrder {
              __typename
              signatories {
                __typename
                id
                href
              }
            }
            signatory {
              __typename
              id
              href
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
