<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('registrations', function (Blueprint $table) {
            $table->json('custom_fields')->nullable();
        });
        Schema::table('events', function (Blueprint $table) {
            $table->json('custom_fields')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('registrations', function (Blueprint $table) {
        $table->dropColumn('custom_fields');
        });
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('custom_fields');
        }); 
    }
};
