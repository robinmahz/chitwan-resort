<?php

namespace App\Filament\Resources\Galleries\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class GalleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->required()->disk('public')
                    ->directory('media/uploads/gallery'),
                // TextInput::make('order')
                //     ->required()
                //     ->numeric()
                //     ->default(0),
            ]);
    }
}
