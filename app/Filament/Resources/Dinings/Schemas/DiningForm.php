<?php

namespace App\Filament\Resources\Dinings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class DiningForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('category')
                    ->required()->placeholder('International Fine Dining'),
                FileUpload::make('image')
                    ->image()
                    ->required()->disk('public')
                    ->directory('media/uploads/dinings'),
                Textarea::make('description')
                    ->required()->rows(4),
                TextInput::make('hours')
                    ->required()->placeholder('Breakfast: 7AM-11AM | Dinner: 6PM-11PM'),
            ]);
    }
}
