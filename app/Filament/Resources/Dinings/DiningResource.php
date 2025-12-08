<?php

namespace App\Filament\Resources\Dinings;

use App\Filament\Resources\Dinings\Pages\CreateDining;
use App\Filament\Resources\Dinings\Pages\EditDining;
use App\Filament\Resources\Dinings\Pages\ListDinings;
use App\Filament\Resources\Dinings\Schemas\DiningForm;
use App\Filament\Resources\Dinings\Tables\DiningsTable;
use App\Models\Dining;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class DiningResource extends Resource
{
    protected static ?string $model = Dining::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedHomeModern;

    public static function form(Schema $schema): Schema
    {
        return DiningForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return DiningsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListDinings::route('/'),
            'create' => CreateDining::route('/create'),
            'edit' => EditDining::route('/{record}/edit'),
        ];
    }
}
