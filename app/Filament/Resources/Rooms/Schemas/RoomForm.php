<?php

namespace App\Filament\Resources\Rooms\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class RoomForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->placeholder('Room Name')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->required()->disk('public')
                    ->directory('media/uploads/rooms'),
                Textarea::make('description')->placeholder('Room Description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('area')->placeholder('200 sq ft'),
                TextInput::make('guests')
                    ->numeric()->minValue(1)->placeholder('Number of Guests'),
                TextInput::make('price')->placeholder('2000 Rs / Night'),
                TextInput::make('furniture')->placeholder('2 King + Sofa'),
                Repeater::make('amenities')
                    ->label('Amenities')
                    ->simple(
                        TextInput::make('name')->label('Name')->required()->maxLength(255)->placeholder('Private Balcony'),
                    )
                    ->columnSpan(2)
                    ->addActionLabel('Add Amenities'),
            ]);
    }
}
