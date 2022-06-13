<?php declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Criipto\SignaturesApi\Types as Types;
use Criipto\SignaturesApi\Operations as Operations; 

function pollSignatureOrderComplete(string $signatureOrderId) {
    $signatureOrderResponse = Operations\querySignatureOrder::execute($signatureOrderId)->errorFree();
    $signatureOrder = $signatureOrderResponse->data->signatureOrder;

    $anyOpen = false;
    foreach ($signatureOrder->signatories as $signatory) {
        if ($signatory->status == "OPEN") {
            $anyOpen = true;
        }
    }

    if (!$anyOpen) return $signatureOrder;
    usleep(500000); // 200ms
    pollSignatureOrderComplete($signatureOrderId);
}

$pdfFileName = __DIR__ . '/input-sample.pdf';
$pdfHandle = fopen($pdfFileName, "rb");
$pdfContents = fread($pdfHandle, filesize($pdfFileName));
fclose($pdfHandle);

$pdfInput = Types\PadesDocumentInput::make("Example Document", base64_encode($pdfContents), "TEMPORARY");
$documentInput = Types\DocumentInput::make($pdfInput);
$input = Types\CreateSignatureOrderInput::make(array($documentInput));

echo 'Creating signature order ...'.PHP_EOL;

$signatureOrderResponse = Operations\createSignatureOrder::execute($input)->errorFree();
$signatureOrder = $signatureOrderResponse->data->createSignatureOrder->signatureOrder;
$signatureOrderId = $signatureOrder->id;

echo $signatureOrderId;

echo 'Adding signatory ...'.PHP_EOL;

$signatoryResponse = Operations\addSignatory::execute(Types\AddSignatoryInput::make($signatureOrderId))->errorFree();
$signatory = $signatoryResponse->data->addSignatory->signatory;

echo 'Signatory added, open '.$signatory->href.' to sign documents'.PHP_EOL;

pollSignatureOrderComplete($signatureOrderId);

echo 'Signatory signed, closing signature order ...'.PHP_EOL;

$closeResponse = Operations\closeSignatureOrder::execute(Types\CloseSignatureOrderInput::make($signatureOrderId))->errorFree();
print_r($closeResponse);
foreach ($closeResponse->data->closeSignatureOrder->signatureOrder->documents as $index => $document) {
    $file = fopen(__DIR__ . '/output-sample-'.$index.'.pdf', "w");
    fwrite($file, base64_decode($document->blob));
    fclose($file);
}

echo 'Signature order signed and closed, you can inspect results in output-*-sample.pdf';