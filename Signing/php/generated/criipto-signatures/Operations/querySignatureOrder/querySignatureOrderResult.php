<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\querySignatureOrder;

class querySignatureOrderResult extends \Spawnia\Sailor\Result
{
    public ?querySignatureOrder $data = null;

    protected function setData(\stdClass $data): void
    {
        $this->data = querySignatureOrder::fromStdClass($data);
    }

    /**
     * Useful for instantiation of successful mocked results.
     *
     * @return static
     */
    public static function fromData(querySignatureOrder $data): self
    {
        $instance = new static;
        $instance->data = $data;

        return $instance;
    }

    public function errorFree(): querySignatureOrderErrorFreeResult
    {
        return querySignatureOrderErrorFreeResult::fromResult($this);
    }

    public static function endpoint(): string
    {
        return 'criipto-signatures';
    }

    public static function config(): string
    {
        return __DIR__ . '/../../../../sailor.php';
    }
}
