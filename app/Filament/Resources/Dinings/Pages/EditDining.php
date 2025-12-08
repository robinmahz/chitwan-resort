<?php

namespace App\Filament\Resources\Dinings\Pages;

use App\Filament\Resources\Dinings\DiningResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditDining extends EditRecord
{
    protected static string $resource = DiningResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
