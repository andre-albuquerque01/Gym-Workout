<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WorkOut extends Model
{
    use HasFactory, HasUlids;

    protected $table = 'workOut';

    protected $primaryKey = 'idWorkOut';

    protected $fillable = [
        'name',
        'description',
        'image',
        "muscle",
        "equipment",
        "difficulty",
        "duration",
        "calories",
        "weight",
        "repetition",
    ];

    public function training(): HasMany
    {
        return $this->hasMany(TrainingWorkOut::class, 'workOut_id', 'idWorkOut');
    }
   
}
