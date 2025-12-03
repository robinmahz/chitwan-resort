<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Schemas;
use Filament\Schemas\Schema;
use Filament\Forms;


class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Schemas\Components\Group::make([
                    Schemas\Components\Section::make('Basic Details')
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->label('Name')
                                ->required(),
                            Forms\Components\TextInput::make('position')
                                ->label('Position')
                                ->required(),
                            Forms\Components\Select::make('rating')
                                ->label('Rating')
                                ->options([
                                    1 => '1 Star',
                                    2 => '2 Stars',
                                    3 => '3 Stars',
                                    4 => '4 Stars',
                                    5 => '5 Stars',
                                ])
                                ->default(5)
                                ->required(),
                        ])->columns(2),
                    Schemas\Components\Section::make('Description')
                        ->schema([
                            Forms\Components\Textarea::make('description')
                                ->label('Testimonial Description')
                                ->required(),
                        ]),
                ])->columnSpan(2),
                Schemas\Components\Section::make('Media Upload')
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->label('Testimonial Image')
                            ->image()
                            ->required()->disk('public')
                            ->directory('media/uploads/testimonial'),
                    ])->columnSpan(1),
            ])->columns(3);
    }
}
