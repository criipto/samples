<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\createSignatureOrder;

class createSignatureOrderResult extends \Spawnia\Sailor\Result
{
    public ?createSignatureOrder $data = null;

    protected function setData(\stdClass $data): void
    {
        $this->data = createSignatureOrder::fromStdClass($data);
    }

    /**
     * Useful for instantiation of successful mocked results.
     *
     * @return static
     */
    public static function fromData(createSignatureOrder $data): self
    {
        $instance = new static;
        $instance->data = $data;

        return $instance;
    }

    public function errorFree(): createSignatureOrderErrorFreeResult
    {
        return createSignatureOrderErrorFreeResult::fromResult($this);
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
