<?php

namespace App\Filament\Resources\Dinings\Pages;

use App\Filament\Resources\Dinings\DiningResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListDinings extends ListRecords
{
    protected static string $resource = DiningResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
