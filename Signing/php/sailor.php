<?php declare(strict_types=1);

use GraphQL\Type\Schema;
use Spawnia\Sailor\Client;
use Spawnia\Sailor\EndpointConfig;
use Spawnia\Sailor\Type\StringTypeConfig;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

/*
 * This must return a map from endpoint names to EndpointConfig classes.
 */
return [
    'criipto-signatures' => new class() extends EndpointConfig {
        /**
         * Instantiate a client for Sailor to use for querying.
         *
         * You may use one of the built-in clients, such as Guzzle, or
         * bring your own implementation.
         *
         * Configuring the client is up to you. Since this configuration
         * file is just PHP code, you can do anything. For example, you
         * can use environment variables to enable a dynamic config.
         */
        public function makeClient(): Spawnia\Sailor\Client
        {
            return new \Spawnia\Sailor\Client\Guzzle(
                'https://signatures-api.criipto.com/v1/graphql',
                [
                    'headers' => [
                        'Authorization' => 'Basic '.base64_encode($_ENV['SIGNATURES_CLIENT_ID'].':'.$_ENV['SIGNATURES_CLIENT_SECRET']),
                    ],
                ]
            );
        }

        public function configureTypes(Schema $schema): array
        {
            return array_merge(
                parent::configureTypes($schema),
                [
                    'Blob' => new StringTypeConfig(),
                    'URI' => new StringTypeConfig(),
                    'DateTime' => new StringTypeConfig(),
                    'Date' => new StringTypeConfig(),
                ]
            );
        }

        /**
         * The namespace the generated classes will be created in.
         */
        public function namespace(): string
        {
            return 'Criipto\SignaturesApi';
        }

        /**
         * Path to the directory where the generated classes will be put.
         */
        public function targetPath(): string
        {
            return __DIR__ . '/generated/criipto-signatures';
        }

        /**
         * Where to look for .graphql files containing operations.
         */
        public function searchPath(): string
        {
            return __DIR__ . '/src';
        }

        /**
         * The location of the schema file that describes the endpoint.
         */
        public function schemaPath(): string
        {
            return __DIR__ . '/criipto-signatures.graphql';
        }
    },
];
