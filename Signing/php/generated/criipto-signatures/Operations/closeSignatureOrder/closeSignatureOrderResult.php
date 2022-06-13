<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\closeSignatureOrder;

class closeSignatureOrderResult extends \Spawnia\Sailor\Result
{
    public ?closeSignatureOrder $data = null;

    protected function setData(\stdClass $data): void
    {
        $this->data = closeSignatureOrder::fromStdClass($data);
    }

    /**
     * Useful for instantiation of successful mocked results.
     *
     * @return static
     */
    public static function fromData(closeSignatureOrder $data): self
    {
        $instance = new static;
        $instance->data = $data;

        return $instance;
    }

    public function errorFree(): closeSignatureOrderErrorFreeResult
    {
        return closeSignatureOrderErrorFreeResult::fromResult($this);
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
