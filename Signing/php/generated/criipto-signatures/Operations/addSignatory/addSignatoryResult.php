<?php

declare(strict_types=1);

namespace Criipto\SignaturesApi\Operations\addSignatory;

class addSignatoryResult extends \Spawnia\Sailor\Result
{
    public ?addSignatory $data = null;

    protected function setData(\stdClass $data): void
    {
        $this->data = addSignatory::fromStdClass($data);
    }

    /**
     * Useful for instantiation of successful mocked results.
     *
     * @return static
     */
    public static function fromData(addSignatory $data): self
    {
        $instance = new static;
        $instance->data = $data;

        return $instance;
    }

    public function errorFree(): addSignatoryErrorFreeResult
    {
        return addSignatoryErrorFreeResult::fromResult($this);
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
