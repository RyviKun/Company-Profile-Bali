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
    Schema::create('events', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('slug')->unique();
        $table->longText('content')->nullable();
        $table->longText('shortDescription')->nullable();
        $table->integer('capacity')->nullable();
        $table->string('address')->nullable();
        $table->string('googleMapsLink')->nullable();
        $table->timestamp('start_date')->nullable();
        $table->timestamp('end_date')->nullable();
        $table->string('status')->default('draft');
        $table->json('gallery')->nullable();
        $table->softDeletes();
        $table->timestamps();
        
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
